const query = require('../database')

const guests = () => {
  console.log('ID      Guest Name                    Email')
  console.log('--------------------------------------------------------------')
  query.listAllGuests()
    .then(data => {
      const guests = data.rows
      guests.forEach(function(guest){
        let id = guest.id
        let name = guest.name
        let email = guest.email
        console.log(`${id}      ${name}                ${email}`)
      })
    })
}

module.exports = guests
