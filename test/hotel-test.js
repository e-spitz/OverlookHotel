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
    hotel = new Hotel(allBookings, allRooms)
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

  it('should instantiate a hotel', () => {
   expect(hotel).to.be.an.instanceOf(Hotel);
 });

 it('should be able to store all booking info', () => {
   expect(hotel.bookings).to.deep.equal(allBookings)
 })

 it('should be able to store all room info', () => {
   expect(hotel.rooms).to.deep.equal(allRooms)
 })

 it('should be able to store available rooms', () => {
    expect(hotel.availableRooms).to.deep.equal([]);
  });

it('should be able to get full booking and room info for a customer', () => {
  let leathaBookings = hotel.getBookingInfo(leatha)
  expect(leathaBookings).to.deep.equal([
    {
      room: {
        number: 15,
        roomType: 'residential suite',
        bidet: false,
        bedSize: 'full',
        numBeds: 1,
        costPerNight: 294.56
      },
      booking: {
        id: '5fwrgu4i7k55hl6sz',
        userID: 1,
        date: '2020/04/22',
        roomNumber: 15,
        roomServiceCharges: []
      }
    },
    {
      room: {
        number: 12,
        roomType: 'single room',
        bidet: false,
        bedSize: 'twin',
        numBeds: 2,
        costPerNight: 172.09
      },
      booking: {
        id: '5fwrgu4i7k55hl6t6',
        userID: 1,
        date: '2020/01/10',
        roomNumber: 12,
        roomServiceCharges: []
      }
    }
  ])
  })

  it('should be able to find booked rooms on a specified date', () => {
    let bookedRoomNum = hotel.findBookedRooms('2020/01/24');
    expect(bookedRoomNum.length).to.deep.equal(1)
    expect(bookedRoomNum).to.deep.equal([24])
  
  })

})
