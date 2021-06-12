import chai from 'chai';
import Customer from '../src/customer'
import Booking from '../src/booking'
import Room from '../src/room'
import { testCustomers, testRooms, testBookings } from './test-data'
const expect = chai.expect;

describe.only('Booking', () => {
  let booking1, booking2, booking3;

  beforeEach(() => {
    booking1 = new Booking(testBookings[0])
    booking2 = new Booking(testBookings[1])
    booking3 = new Booking(testBookings[2])
  })

  it('should be a function', () => {
    expect(Booking).to.be.a('function')
  })

  it('should instantiate a booking', () => {
    expect(booking1, booking2, booking3).to.be.an.instanceOf(Booking)
  })

  it('should have an id', () => {
    expect(booking1.id).to.equal("5fwrgu4i7k55hl6sz")
    expect(booking2.id).to.equal(testBookings[1].id)
    expect(booking3.id).to.equal("5fwrgu4i7k55hl6t6")
  })

  it('should have a userID', () => {
    expect(booking2.userID).to.equal(2)
  })

  it('should have a date', () => {
    expect(booking1.date).to.be.a('string')
    expect(booking1.date).to.equal("2020/04/22")
  })

  it('should have a room number', () => {
    expect(booking2.roomNumber).to.be.a('number')
    expect(booking2.roomNumber).to.equal(24)
  })

  it('should have a place for room service charges', () => {
    expect(booking1.roomServiceCharges).to.be.an('array')
    expect(booking1.roomServiceCharges).to.deep.equal([])
  })
})
