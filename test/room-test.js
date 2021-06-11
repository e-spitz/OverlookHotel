import chai from 'chai';
import Customer from '../src/customer'
import Room from '../src/room'
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
