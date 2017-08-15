let pgp = require('pg-promise')()
let connectionString = 'postgres://localhost:5432/hotel_db'
let db = pgp(connectionString)

const listAllGuests = () => { return db.result(
  `SELECT *
  FROM guest`
)}

const listAllRooms = () => {return db.any (
  `SELECT room_number, capacity, available
  FROM room
  ORDER BY room_number`
)}

const listAvailableRooms = () => {return db.any (
  `SELECT room_number, capacity, available
  FROM room
  WHERE available = true ORDER BY room_number`
)}

const listUpcomingBookings = () => {return db.any(
  `SELECT room.room_number, guest.name, booking.check_in, booking.check_out
  FROM room, guest, booking
  WHERE room.id = booking.room_id
  AND guest.id = booking.guest_id
  AND booking.check_out > CURRENT_DATE;`
)}

const listBookingsForRoom = (room) => {return db.any (
  `SELECT room.room_number, guest.name, booking.check_in, booking.check_out
  FROM room, guest, booking
  WHERE room.room_number = $1
  AND room.id = booking.room_id
  AND guest.id = booking.guest_id
  AND booking.check_out > CURRENT_DATE;`, [room]
)}


module.exports = { listAllGuests, listAllRooms, listAvailableRooms, listUpcomingBookings, listBookingsForRoom }
