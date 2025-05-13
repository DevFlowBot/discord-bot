const { logConnection } = require('@common/utils/logger');

const task = async (client) => {
  const result = await client.db.raw('SELECT 1');
  return !!result;
};

const checkDatabase = async (client) => {
  return logConnection(
    'Testando conexão com o Banco de dados',
    'Conectado ao Banco de dados',
    'Falha ao conectar ao Banco de dados',
    () => task(client)
  );
};

module.exports = { checkDatabase, task };
