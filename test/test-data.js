const testCustomers = [
  {
    "id": 1,
    "name": "Leatha Ullrich"
  },
  {
    "id": 2,
    "name": "Rocio Schuster"
  },
  {
    "id": 3,
    "name": "Kelvin Schiller"
  }
]


const testRooms = [
  {
    "number": 15,
    "roomType": "residential suite",
    "bidet": false,
    "bedSize": "full",
    "numBeds": 1,
    "costPerNight": 294.56
  },
  {
    "number": 24,
    "roomType": "suite",
    "bidet": false,
    "bedSize": "queen",
    "numBeds": 1,
    "costPerNight": 327.24
  },
  {
    "number": 12,
    "roomType": "single room",
    "bidet": false,
    "bedSize": "twin",
    "numBeds": 2,
    "costPerNight": 172.09
  }
]

const testBookings = [
  {
    "id": "5fwrgu4i7k55hl6sz",
    "userID": 1,
    "date": "2020/04/22",
    "roomNumber": 15,
    "roomServiceCharges": []
  },
  {
    "id": "5fwrgu4i7k55hl6t5",
    "userID": 2,
    "date": "2020/01/24",
    "roomNumber": 24,
    "roomServiceCharges": []
  },
  {
    "id": "5fwrgu4i7k55hl6t6",
    "userID": 1,
    "date": "2020/01/10",
    "roomNumber": 12,
    "roomServiceCharges": []
  }
]

export { testCustomers, testRooms, testBookings }
