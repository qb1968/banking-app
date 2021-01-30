const {Pool} = require('pg')

const pool = new Pool({
    user: 'postgres',
    password: 'Allison19',
    host: 'localhost',
    port: 5432,
    database: 'bank_account'
})

module.exports = {pool}