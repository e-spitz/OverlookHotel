import chai from 'chai';
import Hotel from '../src/hotel'
import Customer from '../src/customer'
import Booking from '../src/booking'
import Room from '../src/room'
import { testCustomers, testRooms, testBookings } from './test-data'
const expect = chai.expect;

describe('Customer', () => {
  let customer1, customer2, booking1, booking2, allBookings, room1, room2, allRooms, hotel;

  beforeEach(() => {
    customer1 = new Customer(testCustomers[1])
    customer2 = new Customer(testCustomers[2])
    booking1 = new Booking(testBookings[0])
    booking2 = new Booking(testBookings[2])
    allBookings = [booking1, booking2]
    room1 = new Room(testRooms[0])
    room2 = new Room(testRooms[1])
    allRooms = [room1, room2]
    hotel = new Hotel(allBookings, allRooms)
  })
})
