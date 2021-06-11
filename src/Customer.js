class Customer {
  constructor(newCustomer) {
    this.id: newCustomer.id;
    this.name: newCustomer.name;
    this.previousBookings = [];
    this.totalSpent = 0;
  }
}

export default Customer;
