const { db } = require('../../client/database');
const logConnection = require('../logger');

const task = async () => {
  const result = await db.raw('SELECT 1');
  return !!result;
};

const checkDatabase = async () => {
  const message = '🔄 Testando conexão com o Banco de dados';
  const successMessage = 'Conectado ao Banco de dados';
  const failMessage = 'Falha ao conectar ao Banco de dados';

  return logConnection(message, successMessage, failMessage, task);
};

module.exports = { checkDatabase, task };
