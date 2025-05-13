const ora = require('ora');
const chalk = require('chalk');

const logConnection = async (message, success, fail, task) => {
  const spinner = ora({
    text: chalk.cyan.bold(message),
    spinner: 'dots',
  }).start();

  try {
    await task();
    spinner.stop();
    console.log(`${chalk.green('✅')} ${chalk.green.bold(success)}`);
    return true;
  } catch (err) {
    spinner.stop();
    console.log(`${chalk.red('❌')} ${chalk.red.bold(fail)}`);
    console.error(chalk.gray(err.message));
    return false;
  }
};

const log = {
  info: (msg) => console.log(`\n${chalk.blue('🔄')} ${chalk.blueBright(msg)}`),
  success: (msg) =>
    console.log(`\n${chalk.green('🚀')} ${chalk.bold.magentaBright(msg)}`),
  warn: (msg) =>
    console.log(`\n${chalk.yellow('⚠️')} -${chalk.yellowBright(msg)}`),
  error: (msg) => console.log(`\n${chalk.red('❌')} ${chalk.redBright(msg)}`),
};

module.exports = { logConnection, log };
