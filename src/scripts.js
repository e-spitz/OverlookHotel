// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********

// An example of how you tell webpack to use a CSS (SCSS) file
import { fetchAllData } from './apiCalls';
import './css/base.scss';
import Customer from './customer';
import Booking from './booking';
import Hotel from './hotel';
import Room from './room';
let customer;
let customers = [];
let rooms = [];
let bookings= [];

// An example of how you tell webpack to use an image (also need to link to it in the index.html)
// import './images/turing-logo.png'

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
    customerData.customers.forEach(customer => customers.push(customer))
  }

  // function generateUser(userData) {
  //   user = new User(userData[Math.floor(Math.random() * userData.length)]);
  //   let firstName = user.name.split(" ")[0];
  //   userInfo.push(userData)
  //   domUpdates.addWelcomeMessage(firstName);
  // }

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

  //set date

  //validate username/password function
