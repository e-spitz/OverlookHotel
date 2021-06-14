class Hotel {
  constructor(bookings, rooms) {
    this.bookings = bookings;
    this.rooms = rooms;
    this.availableRooms = [];
  }

  getBookingInfo(customer) {
    let customerBookings = customer.findCustomerBookings(this.bookings)
    let customerRooms = this.rooms.reduce((arr, room) => {
      customerBookings.forEach(booking => {
        if (room.number === booking.roomNumber) {
          arr.push( {room, booking} )
        }
      })
      return arr;
    }, [])
    return customerRooms;
  }

  findBookedRooms(date) {
    let matchedRoom = this.bookings.filter(booking => {
      return date === booking.date
    }).map(room => room.roomNumber)
    return matchedRoom;
  }

  findAvailableRooms(date) {
    let availableRoom = this.bookings.filter(booking => {
      return date === booking.date
    }).map(room => room.roomNumber)
    // console.log(availableRoom)
    return availableRoom;
  }

  filterRoomsByType(type) {
    let filteredRoom = this.rooms.filter(room => {
      return room.roomType === type
    })
      return filteredRoom;
  }

  filterRoomsByDateAndType(date, type) {
    let getRoomsByType = (type === "All Available Rooms") ?
      this.rooms :
      this.filterRoomsByType(type)
      console.log(getRoomsByType)
      // this.rooms.filter(room => type === room.roomType)
    let getCurrentBookings = this.findAvailableRooms(date)
    console.log(getCurrentBookings)
    return getRoomsByType.filter(room => !getCurrentBookings.includes(room.number))
  }
}

// this.bookings.filter(booking => date === booking.date)

export default Hotel;
