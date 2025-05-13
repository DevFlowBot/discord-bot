const path = require('path');
const alias = require('module-alias');

const srcPath = path.resolve('src');
const packagePath = path.resolve('package');
const databasePath = path.resolve('database');
const localesPath = path.resolve('locales');

alias.addAlias('@common', srcPath);
alias.addAlias('@database', databasePath);
alias.addAlias('@package', packagePath);
alias.addAlias('@locales', localesPath);

module.exports = alias;
