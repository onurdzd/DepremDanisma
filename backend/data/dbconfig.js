const knex = require('knex')('development')
const knexConfig = require('../knexfile.js');
const NODE_ENV=process.env.NODE_ENV || 'development';
const environment = NODE_ENV || 'development';

module.exports = knex(knexConfig[environment]);
