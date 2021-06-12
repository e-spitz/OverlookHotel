import chai from 'chai';
import Customer from '../src/Customer';
import Booking from '../src/Booking';
import Room from '../src/Room';
import Hotel from '../src/Hotel';
import { testCustomers, testRooms, testBookings } from './test-data'
const expect = chai.expect;

describe.only('Hotel', () => {
  let hotel, booking1, booking2, booking3, allBookings,
  room1, room2, room3, allRooms, leatha, rocio, kelvin;

  beforeEach(() => {
    hotel = new Hotel(allRooms, allBookings)
    booking1 = new Booking(testBookings[0]);
    booking2 = new Booking(testBookings[1]);
    booking3 = new Booking(testBookings[2]);
    allBookings = [booking1, booking2, booking3]
    room1 = new Room(testRooms[0])
    room2 = new Room(testRooms[1])
    room3 = new Room(testRooms[2])
    allRooms = [room1, room2, room3]
    leatha = new Customer(testCustomers[0]);
    rocio = new Customer(testCustomers[1]);
    kelvin = new Customer(testCustomers[2]);
  })

  it('should be a function', () => {
    expect(Hotel).to.be.a('function');
  });
})
