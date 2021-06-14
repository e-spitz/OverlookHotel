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
let previousStaysLink = document.getElementById('previousStaysLink')
let bookRoomSection = document.getElementById('bookRoom')
let upcomingStays = document.getElementById('upcomingStays')
let previousStays = document.getElementById('previousStays')
let totalSpent = document.getElementById('totalSpent')
let availableRooms = document.getElementById('availableRooms')
let searchBtn = document.getElementById('searchBtn')
let bookRoomDate = document.getElementById('bookRoomDate')
let roomTypes = document.getElementById('roomTypes')
let currentCustomer;
let customers = [];
let rooms = [];
let bookings= [];
let hotel;

window.addEventListener('load', loadData)
bookRoomLink.addEventListener('click', displayBookRoom)
searchBtn.addEventListener('click', bookARoom)
availableRooms.addEventListener('click', bookNow)
previousStaysLink.addEventListener('click', displayPreviousStays)



function loadData() {
  fetchAllData()
  .then(function(data) {
    createCustomers(data[0]);
    createRooms(data[1]);
    createBookings(data[2]);
    createHotel(data[2], data[1])
  })
}

  function createCustomers(customerData) {
    customerData.customers.forEach(customer => {
      let newCustomer = new Customer(customer)
      customers.push(newCustomer)
    })
      currentCustomer = customers[Math.floor(Math.random() * customers.length)]
      updateUserName(currentCustomer)
}

  function createRooms(roomData) {
    roomData.rooms.forEach(room => {
      let newRoom = new Room(room)
      rooms.push(newRoom)
    })
  }

  function createBookings(bookingData) {
    bookingData.bookings.forEach(booking => {
      let newBooking = new Booking(booking)
      bookings.push(newBooking)
      currentCustomer.findCustomerBookings(bookings)
    })
  }

  function createHotel(bookingData, roomData) {
    hotel = new Hotel(bookingData.bookings, roomData.rooms)
    }

  function updateUserName(customer) {
    document.querySelector('#user').innerText = customer.name;
  }

  function displayBookRoom() {
    toggle(bookRoomSection)
  }

  function bookARoom() {
    const date = bookRoomDate.value.split('-').join('/')
    const roomSelection = roomTypes.value;
    let filteredRooms = hotel.filterRoomsByDateAndType(date, roomSelection);
    show(availableRooms)
    displayAvailableRooms(filteredRooms)
  }

  function displayAvailableRooms(filteredRooms) {
    availableRooms.innerHTML = ""
    if (filteredRooms.length === 0) {
    availableRooms.innerText = 'We apologize but there appear to be no rooms that meet your search criteria. Please choose a different day or room type.'
  } else {
    filteredRooms.map(room => {
      if (room.bidet) {
        room.bidet = "yes"
      } else {
        room.bidet = "no"
      }
      const roomCard = `<div class="room-card" data-id="${room.number}">
      <p>Room Number: ${room.number}</p>
      <p>Room Type: ${room.roomType}</p>
      <p>Has Bidet: ${room.bidet}</p>
      <p>Bed Size: ${room.bedSize}</p>
      <p>Number of Beds: ${room.numBeds}</p>
      <p>Cost Per Night: ${room.costPerNight}</p>
      <button class="book-now-btn">Book Now</button>
      </div>`
      availableRooms.insertAdjacentHTML('beforeend', roomCard)
    })
  }
}

  function bookNow(event) {
    if (event.target.classList.contains('book-now-btn')) {
      let roomCardID = event.target.closest('.room-card').dataset.id
    }
    //apiCalls.postrequestmethod()
  }

  function displayPreviousStays(bookings) {
    hide(bookRoomSection)
    toggle(previousStays)
    let customerHistory = currentCustomer.bookings;
    previousStays.innerHTML = ""
    customerHistory.map(booking => {
      const customerBookings = `<div class="customerCard">
      <p>Date: ${booking.date}</p>
      <p>Room Number: ${booking.roomNumber}</p>
      <p>Booking ID: ${booking.id}</p>
      </div>`
      previousStays.insertAdjacentHTML('beforeend', customerBookings)
  })
  }

  function show(element) {
    element.classList.remove('hidden')
  }

  function hide(element) {
    element.classList.add('hidden')
  }

  function toggle(element) {
    element.classList.toggle('hidden')
  }


  //set date

  //validate username/password function
