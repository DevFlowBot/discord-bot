const { execSync } = require('child_process');
const chalk = require('chalk');

const stagedFiles = execSync('git diff --cached --name-only').toString().trim();

if (!stagedFiles) {
  console.log(chalk.bold.red('⚠️  Nenhum arquivo staged. Commit cancelado.'));
  // eslint-disable-next-line no-undef
  process.exit(1);
}
