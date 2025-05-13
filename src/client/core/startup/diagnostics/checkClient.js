const { logConnection } = require('@common/utils/logger');
require('dotenv').config();

const task = async (client) => {
  return !!client?.user?.id;
};

const checkClient = async (client) => {
  return logConnection(
    'Testando conexão com o cliente do Discord',
    'Conectado ao Discord',
    'Falha ao conectar ao Discord',
    () => task(client)
  );
};

module.exports = { checkClient, task };
