const pgp = require('pg-promise')()
const connectionString = 'postgres://localhost:5432/grocery_store'
const db = pgp(connectionString)

const listAllGuests = () => { return db.any(
  `SELECT * FROM guest`
)}

const listAllRooms = () => {return db.any (
  `SELECT room_number, capacity, available FROM room ORDER BY room_number`
)}

const listAvailableRooms = () => {return db.any (
  `SELECT room_number, capacity, available FROM room WHERE available = true ORDER BY room_number`
)}


module.exports = { listAllGuests, listAllRooms, listAvailableRooms }
