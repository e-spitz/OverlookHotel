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
    console.log(customerRooms)
    return customerRooms;
  }
}


export default Hotel;
