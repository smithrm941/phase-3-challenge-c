const query = require('../database')

const allRooms = () => {
  console.log('Room #  Capacity     Available')
  console.log('--------------------------------')
  query.listAllRooms()
    .then(data => {
      const rooms = data
      rooms.forEach((room) =>{
        let roomNumber = room.room_number
        let capacity = room.capacity
        let available = room.available
        console.log(`${roomNumber}      ${capacity}             ${available}`)
      })
    })
}

const allAvailableRooms = () => {
  console.log('Room #  Capacity     Available')
  console.log('--------------------------------')
  query.listAvailableRooms()
    .then(data => {
      const rooms = data
      rooms.forEach((room) =>{
        let roomNumber = room.room_number
        let capacity = room.capacity
        let available = room.available
        console.log(`${roomNumber}      ${capacity}             ${available}`)
      })
    })
}

module.exports = { allRooms, allAvailableRooms }
