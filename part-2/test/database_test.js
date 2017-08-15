const expect = require ('chai').expect
const query = require('../database')

describe('listAllGuests', () => {
  it('should return 20 rows of data and the guest 1 should be Arthur Velti', () => {
    return query.listAllGuests()
      .then(data => {
        expect(data.rows[0].name).to.deep.equal('Aurthur Velti')
        expect(data.rows).to.have.lengthOf(20)
      })
  })
})

describe('listAllRooms', () => {
  it('should return 18 rows of data and room 18 should be 5B', () => {
    return query.listAllRooms()
      .then(data => {
        console.log(data)
        expect(data[17].room_number).to.deep.equal('5B')
        expect(data).to.have.lengthOf(18)
      })
  })
})
