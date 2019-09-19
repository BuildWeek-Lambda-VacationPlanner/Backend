const db = require('../database/dbConfig.js');

module.exports = {
    find,
    findBy,
    findById,
    add
}

function find() {
    return db('users')
}

function findBy(filter) {
    return db('users').where(filter)
}

function findById(id) {
    return db('users').where({id}).first();
}

function add(userData) {
    return db('users').insert(userData)
    .then(ids => {
        return findById(ids[0]);
    })
}