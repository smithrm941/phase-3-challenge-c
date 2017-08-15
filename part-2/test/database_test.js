const expect = require ('chai').expect
const query = require('../database')

describe(`listAllGuests: database function for 'guests' command`, () => {
  it(`should return 20 rows of data and the guest 1 should
    be Arthur Velti`, () => {
    return query.listAllGuests()
      .then(data => {
        expect(data.rows[0].name).to.equal('Aurthur Velti')
        expect(data.rows).to.have.lengthOf(20)
      })
  })
})

describe(`listAllRooms: database function for 'rooms' command`, () => {
  it(`should return 18 rows of data and room 18 should be 5B`, () => {
    return query.listAllRooms()
      .then(data => {
        expect(data[17].room_number).to.equal('5B')
        expect(data).to.have.lengthOf(18)
      })
  })
})

describe(`listUpcomingBookings: database function for 'bookings' command`, () => {
  it(`should have the latest booking to be for room 4A and guest
    Janie Powers`, () => {
    return query.listUpcomingBookings()
      .then(data => {
        expect(data[data.length-1].room_number).to.equal('4A')
        expect(data[data.length -1].name).to.equal('Janie Powers')
      })
  })
})

describe(`listBookingsForRoom: 2nd database function for 'bookings' command`, () => {
  it(`should return 3 rows of data, and bookings should be for Randy Thys, Enos
    Semark and Janie Powers`, () => {
    return query.listBookingsForRoom('3B')
      .then(data => {
        expect(data).to.have.lengthOf(3)
        expect(data[0].name).to.equal('Randy Thys')
        expect(data[1].name).to.equal('Enos Semark')
        expect(data[2].name).to.equal('Janie Powers')
      })
  })
})
