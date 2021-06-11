import chai from 'chai';
import Hotel from '../src/Hotel'
import Customer from '../src/Customer'
import Booking from '../src/Booking'
import Room from '../src/Room'
import { testCustomers, testRooms, testBookings } from './test-data'
const expect = chai.expect;

describe('Customer', () => {
  let customer1, customer2, customer3, booking1, booking2, booking3, allBookings, room1, room2, room3, allRooms, hotel;

  beforeEach(() => {
    customer1 = new Customer(testCustomers[0])
    customer2 = new Customer(testCustomers[1])
    customer3 = new Customer(testCustomers[2])
    booking1 = new Booking(testBookings[0])
    booking2 = new Booking(testBookings[1])
    booking3 = new Booking(testBookings[2])
    allBookings = [booking1, booking2, booking3]
    room1 = new Room(testRooms[0])
    room2 = new Room(testRooms[1])
    room3 = new Room(testRooms[2])
    allRooms = [room1, room2, room3]
    hotel = new Hotel(allBookings, allRooms)
  })

  it('should be a function', () => {
    expect(Customer).to.be.a('function')
  })

  it('should be an instance Customer', () => {
    expect(customer1).to.be.an.instanceof(Customer)
    expect(customer2).to.be.an.instanceof(Customer)
    expect(customer3).to.be.an.instanceof(Customer)
  })

  it('should have an id', () => {
    expect(customer1.id).to.equal(1);
    expect(customer2.id).to.equal(2);
    expect(customer3.id).to.equal(3);
  });

  it('should have a name', () => {
    expect(customer1.name, customer2.name, customer3.name).to.be.a('string')
    expect(customer1.name).to.equal("Leatha Ullrich")
    expect(customer2.name).to.equal("Rocio Schuster")
    expect(customer3.name).to.equal("Kelvin Schiller")
  })

  it('should have a way to track all bookings', () => {
    expect(customer1.bookings).to.deep.equal([])
  });

  it('should have a default of 0 for totalSpent', () => {
    expect(customer3.totalSpent).to.equal(0)
  });

  it('should be able to find all customer bookings', () => {
    customer1.findCustomerBookings(allBookings)
    customer2.findCustomerBookings(allBookings)
    customer3.findCustomerBookings(allBookings)
    expect(customer1.bookings).to.deep.equal([booking1, booking3])
    expect(customer2.bookings).to.deep.equal([booking2])
    expect(customer3.bookings).to.deep.equal([])
  })

  it('should calculate total amount spent on rooms by customer', () => {
      customer1.findCustomerBookings(allBookings)
      customer2.findCustomerBookings(allBookings)
      customer3.findCustomerBookings(allBookings)
      expect(customer1.calculateTotalSpent(allRooms)).to.equal(466.65)
      expect(customer2.calculateTotalSpent(allRooms)).to.equal(327.24)
      expect(customer3.calculateTotalSpent(allRooms)).to.equal(0.00)
    });

})
