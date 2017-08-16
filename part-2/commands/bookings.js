const query = require('../database')

const allUpcomingBookings = () => {
  console.log('Room #  Guest Name                Check-In                 Check-Out')
  console.log('---------------------------------------------------------------------')
  query.listUpcomingBookings()
    .then(data => {
      const booking = data
      booking.forEach((booking) => {
        let roomNumber = booking.room_number
        let name = booking.name
        let checkIn = booking.check_in.toISOString().substring(0, 10)
        let checkOut = booking.check_out.toISOString().substring(0, 10)
        console.log(`${roomNumber}      ${name}             ${checkIn}                 ${checkOut}`)
      })
    })
}

const upcomingBookingsByRoom = (room) => {
  console.log('Room #  Guest Name                     Check-In                  Check-Out')
  console.log('--------------------------------------------------------------------------')
  query.listBookingsForRoom(room)
    .then(data => {
      const booking = data
      booking.forEach((booking) =>{
        let roomNumber = booking.room_number
        let name = booking.name
        let checkIn = booking.check_in.toISOString().substring(0, 10)
        let checkOut = booking.check_out.toISOString().substring(0, 10)
        console.log(`${roomNumber}      ${name}               ${checkIn}                 ${checkOut}`)
      })
    })
}



module.exports = { allUpcomingBookings, upcomingBookingsByRoom }
