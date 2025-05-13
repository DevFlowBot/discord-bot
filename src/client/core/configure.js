const { loadHandlers, loadModules } = require('../../utils');
const configureAtributes = require('./config/atributes');
const checkAllConnections = require('./startup');

const configureClient = async (client) => {
  loadModules();
  loadHandlers(client);
  configureAtributes(client);

  await checkAllConnections(client);
};

module.exports = configureClient;
