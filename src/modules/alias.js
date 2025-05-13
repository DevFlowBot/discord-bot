const path = require('path');
const alias = require('module-alias');

const srcPath = path.resolve('src');
const packagePath = path.resolve('package');
const databasePath = path.resolve('database');

alias.addAlias('@common', srcPath);
alias.addAlias('@database', databasePath);
alias.addAlias('@package', packagePath);

console.log(databasePath);

module.exports = alias;
