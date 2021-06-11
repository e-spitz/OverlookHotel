// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********

// An example of how you tell webpack to use a CSS (SCSS) file
import { fetchAllData } from './apiCalls';
import './css/base.scss';

let customers = [];
let rooms= [];
let bookings= [];

// An example of how you tell webpack to use an image (also need to link to it in the index.html)
// import './images/turing-logo.png'

console.log('This is the JavaScript entry file - your code begins here.');

window.addEventListener('load', loadData)
    // receiveData()
    // .then(function(data) => {
    //     fetchCustomerData = data[0];
    //     fetchRoomsData = data[1];
    //     fetchBookingsData = data[2];
    //     console.log('customer', fetchCustomerData)
    //     console.log('rooms', fetchRoomsData)
    //     console.log('booking', fetchBookingsData)
    //   })
    // })

function loadData() {
  fetchAllData()
  .then(function(data) {
    // console.log(data[0])
    createCustomers(data[0]);
    // console.log(data[1]);
    createRooms(data[1]);
    console.log(data[2]);
    createBookings(data[2]);
  })
}

  function createCustomers(customerData) {
      // console.log(customerData)
    customerData.customers.forEach(customer => customers.push(customer))
    // console.log(customers)
  }

  function createRooms(roomData) {
    // console.log(roomData)
    roomData.rooms.forEach(room => rooms.push(room))
    // console.log(rooms)
  }

  function createBookings(bookingData) {
    // console.log(bookingData)
    bookingData.bookings.forEach(booking => bookings.push(booking))
    // console.log(bookings)
  }

  // function generateCustomer() {
  //   customer = new Customer
  // }
