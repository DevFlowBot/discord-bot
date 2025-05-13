const { logConnection } = require('@common/utils');

const task = async (client) => {
  const result = await client.db.raw('SELECT 1');
  return !!result;
};

const checkDatabase = async (client) => {
  const message = '🔄 Testando conexão com o Banco de dados';
  const successMessage = 'Conectado ao Banco de dados';
  const failMessage = 'Falha ao conectar ao Banco de dados';

  return logConnection(message, successMessage, failMessage, () =>
    task(client)
  );
};

module.exports = { checkDatabase, task };
