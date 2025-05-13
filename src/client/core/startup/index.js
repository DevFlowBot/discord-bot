const boxen = require('boxen');
const chalk = require('chalk');

const { checkClient, checkDatabase } = require('./diagnostics');
const { log } = require('@common/utils/logger');

const checkAllConnections = async (client) => {
  console.log(
    boxen(chalk.bold.cyan('🔄 Testando conexões...'), {
      padding: 1,
      margin: 1,
      borderStyle: 'round',
      borderColor: 'cyan',
    })
  );

  try {
    const start = Date.now();
    await Promise.all([checkDatabase(client), checkClient(client)]);
    const duration = Date.now() - start;
    log.success(
      `Conexões prontas! Servidor iniciado com sucesso. (${duration}ms)\n`
    );
  } catch (err) {
    log.error(
      'Uma ou mais conexões falharam. Verifique e tente novamente.\nError:',
      err.message
    );
    // eslint-disable-next-line no-undef
    process.exit(1);
  }
};

module.exports = { checkAllConnections };
