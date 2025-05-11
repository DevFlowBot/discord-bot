const ora = require('ora');
const chalk = require('chalk');

const logConnection = (spinnerMessage, successMessage, failMessage, task) => {
  const spinner = ora(chalk.bold.cyan(spinnerMessage)).start();

  return task()
    .then(() => {
      spinner.succeed(chalk.bold.green(successMessage));
      return true;
    })
    .catch((error) => {
      spinner.fail(chalk.bold.red(failMessage));
      console.error(error.message);
      return false;
    });
};

module.exports = logConnection;
