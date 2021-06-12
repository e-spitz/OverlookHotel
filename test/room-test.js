import chai from 'chai';
import Customer from '../src/Customer'
import Room from '../src/Room'
import { testCustomers, testRooms, testBookings } from './test-data'
const expect = chai.expect;

describe('Room', () => {
  let customer1, customer2, customer3, room1, room2, room3;

  beforeEach(() => {
    customer1 = new Customer(testCustomers[0]);
    customer2 = new Customer(testCustomers[1]);
    customer3 = new Customer(testCustomers[2]);
    room1 = new Room(testRooms[0])
    room2 = new Room(testRooms[1]);
    room3 = new Room(testRooms[2]);
  })

  it('should be a function', () => {
    expect(Room).to.be.a('function');
  })

  it('should instantiate a room', () => {
    expect(room1).to.be.an.instanceOf(Room);
  })

  it('should have a room number', () => {
    expect(room1.number).to.be.a('number')
    expect(room1.number).to.equal(15)
  })

  it('should have a room type', () => {
    expect(room2.roomType).to.equal('suite')
    expect(room3.roomType).to.equal('single room')
  })

  it('should either have a bidet or not have a bidet', () => {
    expect(room1.bidet, room2.bidet, room3.bidet).to.equal(false)
  })

  it('should have the size of bed listed', () => {
    expect(room1.bedSize).to.equal('full')
    expect(room2.bedSize).to.equal('queen')
    expect(room3.bedSize).to.equal('twin')
  })

  it('should have number of beds in the room', () => {
    expect(room1.numBeds).to.be.a('number')
    expect(room3.numBeds).to.equal(2)
  })

  it('should list the cost per night for the room', () => {
    expect(room1.costPerNight).to.be.a('number')
    expect(room2.costPerNight).to.equal(327.24)
    expect(room3.costPerNight).to.equal(172.09)
  })
})
