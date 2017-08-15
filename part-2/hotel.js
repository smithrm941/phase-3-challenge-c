const guests = require('./commands/guests')

switch(process.argv[2]){
  case 'guests':
    //call function that lists guests
    guests()
    break;
  case 'rooms':
    if(process.argv[3] === '--available'){
      //call function that lists available rooms
    } else {
      //call function that lists all rooms
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
    'rooms --available', or 'bookings'`)
    break;
}
