const { logConnection } = require('@common/utils');
require('dotenv').config();

const task = async (client) => {
  return !!client?.user?.id;
};

const checkClient = async (client) => {
  const message = '🔄 Testando conexão com o cliente do Discord';
  const successMessage = 'Conectado ao Discord';
  const failMessage = 'Falha ao Conectar ao Discord';

  return logConnection(message, successMessage, failMessage, () =>
    task(client)
  );
};

module.exports = { checkClient, task };
