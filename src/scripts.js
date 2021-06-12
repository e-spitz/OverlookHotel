// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********

// An example of how you tell webpack to use a CSS (SCSS) file
import { fetchAllData } from './apiCalls';
import './css/base.scss';
import './images/overlook-main.jpg'
import Customer from './customer';
import Booking from './booking';
import Hotel from './hotel';
import Room from './room';

let loginBtn = document.getElementById('loginBtn')
let bookRoom = document.getElementById('bookRoom')
let upcomingStays = document.getElementById('upcomingStays')
let previousStays = document.getElementById('previousStays')
let totalSpent = document.getElementById('totalSpent')
let customer;
let customers = [];
let rooms = [];
let bookings= [];

window.addEventListener('load', loadData)
bookRoom.addEventListener('click', bookWithUs)

function loadData() {
  fetchAllData()
  .then(function(data) {
    createCustomers(data[0]);
    createRooms(data[1]);
    createBookings(data[2]);
  })
}

  function createCustomers(customerData) {
    customerData.customers.forEach(customer => customers.push(customer))
  }

  function createRooms(roomData) {
    roomData.rooms.forEach(room => rooms.push(room))
  }

  function createBookings(bookingData) {
    bookingData.bookings.forEach(booking => bookings.push(booking))
  }

  function bookWithUs() {
    console.log('hello')
  }


  // function generateUser(userData) {
  //   user = new User(userData[Math.floor(Math.random() * userData.length)]);
  //   let firstName = user.name.split(" ")[0];
  //   userInfo.push(userData)
  //   domUpdates.addWelcomeMessage(firstName);
  // }


  //set date

  //validate username/password function
