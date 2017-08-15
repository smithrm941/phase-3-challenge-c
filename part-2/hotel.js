const guests = require('./commands/guests')
const allRooms = require('./commands/rooms').allRooms
const allAvailableRooms = require('./commands/rooms').allAvailableRooms


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
    if(process.argv[3].length === 2){ //all room numbers are 2 characters
      //call function that lists upcoming bookings for specific rooms
    } else {
      //call function that lists all upcoming bookings
    }
    break;
  default:
    console.log(`Please use the commands 'guests', 'rooms',
    'rooms --available', 'bookings', or 'bookings' followed by a 2
    character long room number`)
    break;
}
