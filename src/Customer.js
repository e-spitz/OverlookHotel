class Customer {
  constructor(newCustomer) {
    this.id = newCustomer.id;
    this.name = newCustomer.name;
    this.bookings = [];
    this.totalSpent = 0;
  }

  findCustomerBookings(bookingData) {
    this.bookings = bookingData.filter(booking => booking.userID === this.id)
  }

  calculateTotalSpent(roomsData) {
    let totalSpent = this.totalSpent;
    totalSpent = roomsData.reduce((sum, room) => {
      this.bookings.forEach(booking => {
        if (room.number === booking.roomNumber) {
          sum += room.costPerNight;
        }
      })
      return sum;
    }, 0)
    return totalSpent;
  }
}

export default Customer;
