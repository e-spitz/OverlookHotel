class Booking {
  constructor(bookings, rooms) {
    this.bookings = bookings;
    this.rooms = rooms;
    this.availableRooms = []
    this.unavailableRooms = []
  }
}

export default Booking;
