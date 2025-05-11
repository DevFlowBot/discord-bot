const knex = require('knex');
const { knexConfig } = require('../../database/knexfile');

const db = knex(knexConfig);

module.exports = { db };
