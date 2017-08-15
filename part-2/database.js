const pgp = require('pg-promise')()
const connectionString = 'postgres://localhost:5432/grocery_store'
const db = pgp(connectionString)

const listAllGuests = () => { return db.any(
  `SELECT * FROM guest`
)} 

module.exports = listAllGuests
