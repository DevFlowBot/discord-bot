const { Client, GatewayIntentBits } = require('discord.js');
require('dotenv').config();

const { loadHandlers, loadModules } = require('../_partials');
const configureAtributes = require('./atributes');
const checkAllConnections = require('../startup');

// eslint-disable-next-line no-undef
const token = process.env.TOKEN;

const startClient = async () => {
  await checkAllConnections();

  const intents = [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMembers,
    GatewayIntentBits.AutoModerationConfiguration,
    GatewayIntentBits.AutoModerationExecution,
    GatewayIntentBits.DirectMessageReactions,
    GatewayIntentBits.DirectMessages,
    GatewayIntentBits.GuildIntegrations,
    GatewayIntentBits.GuildMessageTyping,
    GatewayIntentBits.GuildMessageReactions,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.GuildVoiceStates,
    GatewayIntentBits.GuildModeration,
    GatewayIntentBits.GuildWebhooks,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.GuildPresences,
  ];

  const client = new Client({ intents });

  loadHandlers(client);
  loadModules();
  configureAtributes(client);

  client.login(token).catch((err) => {
    console.error('Erro ao logar no cliente Discord:', err);
  });
};

startClient();
