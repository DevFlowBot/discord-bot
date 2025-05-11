const { Client, GatewayIntentBits } = require('discord.js');
const logConnection = require('../logger');
require('dotenv').config();

const task = async () => {
  const client = new Client({
    intents: [
      GatewayIntentBits.Guilds,
      GatewayIntentBits.GuildMessages,
      GatewayIntentBits.MessageContent,
    ],
  });

  // eslint-disable-next-line no-undef
  const token = process.env.TOKEN;

  await client.login(token);

  const result = await new Promise((resolve) => {
    client.once('ready', () => {
      client.destroy();
      resolve(true);
    });

    setTimeout(() => {
      client.destroy();
      resolve(false);
    }, 10000);
  });

  return result;
};

const checkClient = async () => {
  const message = '🔄 Testando conexão com o cliente do Discord';
  const successMessage = 'Conectado ao Discord';
  const failMessage = 'Falha ao Conectar ao Discord';

  return logConnection(message, successMessage, failMessage, task);
};

module.exports = { checkClient, task };
