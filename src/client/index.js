/* eslint-disable no-undef */
const { Client } = require('discord.js');
const chalk = require('chalk');
require('dotenv').config();
require('../modules/alias');

const { configureClient, intents } = require('./core');

const startClient = async () => {
  const client = new Client({ intents });
  const token = process.env.TOKEN;

  try {
    await configureClient(client);
    await client.login(token);
  } catch (err) {
    console.error(chalk.red('Erro ao logar no cliente Discord:'), err);
    process.exit(1);
  }
};

startClient();
