const { Collection } = require('discord.js');

const { db, i18n } = require('@common/modules');

function configureAtributes(client) {
  client.commands = new Collection();
  client.slashs = new Collection();
  client.alias = new Collection();

  client.t = i18n.t;
  client.db = db;
}

module.exports = { configureAtributes };
