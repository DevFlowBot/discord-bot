const fs = require('fs');
const path = require('path');
const chalk = require('chalk');

const runConnectionTests = async () => {
  // eslint-disable-next-line no-undef
  const connectionsDir = path.resolve(__dirname, '../src/startup/connections');
  const files = fs.readdirSync(connectionsDir);

  let allSuccess = true;

  console.log(chalk.bold.cyan('🔄 Iniciando os testes de conexão...'));

  const tasks = files
    .map((file) => {
      const filePath = path.join(connectionsDir, file);
      const fileName = path.basename(file, path.extname(file));

      if (fs.statSync(filePath).isFile() && filePath.endsWith('.js')) {
        return async () => {
          try {
            const { task } = require(filePath);

            if (typeof task === 'function') {
              const result = await task();

              if (result) {
                console.log(
                  chalk.green(`✅ ${fileName}: Conexão bem-sucedida.`)
                );
              } else {
                console.log(chalk.red(`❌ ${fileName}: Conexão falhou.`));
                allSuccess = false;
              }
            } else {
              console.log(
                chalk.yellow(
                  `⚠️ ${fileName}: Não exporta uma função 'task' válida.`
                )
              );
            }
          } catch (error) {
            console.log(
              chalk.red(
                `❌ ${fileName}: Erro ao executar o teste de conexão. ${error.message}`
              )
            );
            allSuccess = false;
          }
        };
      }
    })
    .filter(Boolean);

  await Promise.all(tasks.map((task) => task()));

  if (allSuccess) {
    console.log(
      chalk.bold.magentaBright('\n🚀 Todas as conexões foram bem-sucedidas.')
    );
    // eslint-disable-next-line no-undef
    process.exit(0);
  } else {
    console.log(chalk.bold.red('\n❌ Algumas conexões falharam.'));
    // eslint-disable-next-line no-undef
    process.exit(1);
  }
};

runConnectionTests();
