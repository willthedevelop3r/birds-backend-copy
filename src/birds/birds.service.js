const knex = require('../db/connection');

async function getAllBirds() {
  return knex('birds').select('*').orderBy('name', 'asc');
}

async function getRandomBird() {
  return knex('birds').orderByRaw('RANDOM()').first();
}

async function read(birdId) {
  return knex('birds').where({ id: birdId }).first();
}

module.exports = {
  getAllBirds,
  getRandomBird,
  read,
};
