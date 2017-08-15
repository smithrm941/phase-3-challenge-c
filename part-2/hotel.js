const guests = require('./commands/guests')
const allRooms = require('./commands/rooms').allRooms
const allAvailableRooms = require('./commands/rooms').allAvailableRooms
const allUpcomingBookings = require('./commands/bookings').allUpcomingBookings
const upcomingBookingsByRoom = require('./commands/bookings').upcomingBookingsByRoom


switch(process.argv[2]){
  case 'guests':
    guests()
    break;
  case 'rooms':
    if(process.argv[3] === '--available'){
      allAvailableRooms()
    } else {
      allRooms()
    }
    break;
  case 'bookings':
    if(process.argv[3] && process.argv[3].length === 2){
      upcomingBookingsByRoom(process.argv[3].toUpperCase())
    } else {
      allUpcomingBookings()
    }
    break;
  default:
    console.log(`Please use the commands 'guests', 'rooms',
    'rooms --available', 'bookings', or 'bookings' followed by a 2
    character long room number`)
    break;
}
