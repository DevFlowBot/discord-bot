const { Collection } = require('discord.js');

const i18n = require('../../../modules/i18n');
const { db } = require('./database');

function configureAtributes(client) {
  client.commands = new Collection();
  client.slashs = new Collection();
  client.alias = new Collection();

  client.t = i18n.t;
  client.db = db;
}

module.exports = configureAtributes;
