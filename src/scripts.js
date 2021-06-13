// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********

// An example of how you tell webpack to use a CSS (SCSS) file
import { fetchAllData } from './apiCalls';
import './css/base.scss';
import './images/overlook-main.jpg'
import Customer from './Customer';
import Booking from './Booking';
import Hotel from './Hotel';
import Room from './Room';

let loginBtn = document.getElementById('loginBtn')
let bookRoomLink = document.getElementById('bookRoomLink')
let bookRoomSection = document.getElementById('bookRoom')
let upcomingStays = document.getElementById('upcomingStays')
let previousStays = document.getElementById('previousStays')
let totalSpent = document.getElementById('totalSpent')
let customer;
let customers = [];
let rooms = [];
let bookings= [];

window.addEventListener('load', loadData)
bookRoomLink.addEventListener('click', displayBookRoom)


function loadData() {
  fetchAllData()
  .then(function(data) {
    createCustomers(data[0]);
    createRooms(data[1]);
    createBookings(data[2]);
  })
}

  function createCustomers(customerData) {
    customerData.customers.forEach(customer => {
      let newCustomer = new Customer(customer)
      customers.push(newCustomer)
      // console.log(newCustomer)
  })
}

  function createRooms(roomData) {
    roomData.rooms.forEach(room => {
      let newRoom = new Room(room)
      rooms.push(newRoom)
      // console.log(newRoom)
    })
  }

  function createBookings(bookingData) {
    bookingData.bookings.forEach(booking => {
      let newBooking = new Booking(booking)
      bookings.push(newBooking)
      // console.log(newBooking)
    })
  }

  function displayBookRoom() {
    show(bookRoomSection)
  }

  function show(element) {
    element.classList.remove('hidden')
  }

  function hide(element) {
    element.classList.add('hidden')
  }

  // function generateUser(userData) {
  //   user = new User(userData[Math.floor(Math.random() * userData.length)]);
  //   let firstName = user.name.split(" ")[0];
  //   userInfo.push(userData)
  //   domUpdates.addWelcomeMessage(firstName);
  // }


  //set date

  //validate username/password function
