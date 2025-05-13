const knex = require('knex');
const { knexConfig } = require('@database/knexfile.js');

const db = knex(knexConfig);

module.exports = { db };
