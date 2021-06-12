import { fetchAllData } from './apiCalls';
import './css/base.scss';
import './images/overlook-main.jpg'
import Customer from './customer';
import Booking from './booking';
import Hotel from './hotel';
import Room from './room';

let loginBtn = document.getElementById('loginBtn')
let customer;
let customers = [];
let rooms = [];
let bookings= [];

window.addEventListener('load', loadData)

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
