const path = require('path');
const alias = require('module-alias');

const srcPath = path.resolve('src');

alias.addAlias('@common', srcPath);

module.exports = alias;
