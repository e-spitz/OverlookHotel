const fetchAllData = () => {
    const promises = [fetchCustomersData(), fetchRoomsData(), fetchBookingsData()]
    return Promise.all(promises)
        .catch(error => console.log("ERROR"))
}

const fetchCustomersData = () => {
    return fetch("http://localhost:3001/api/v1/customers")
        .then(response => response.json())
        .catch(err => console.log("Customer Data ERROR"))
}

const fetchRoomsData = () => {
    return fetch("http://localhost:3001/api/v1/rooms")
        .then(response => response.json())
        .catch(err => console.log("Room Data ERROR"))
}

const fetchBookingsData = () => {
    let userPromise = fetch("http://localhost:3001/api/v1/bookings")
        .then(response => response.json())
        .catch(err => console.log("Booking Data ERROR"))
    return userPromise
}

export {
    fetchAllData,
    fetchCustomersData,
    fetchRoomsData,
    fetchBookingsData,
    // postIng
};

// const receiveData = () => {
//   return Promise.all([fetchData('customers'), fetchData('rooms'), fetchData('bookings')])
// }
//
// const fetchData = (path) => {
//   return fetch(`http://localhost:3001/api/v1/${path}`)
//   .then(response => response.json())
//   .then(data => console.log(data))
//   .catch(err => console.log('Oops, there was an error!'))
// }


// const postData = () => {
//   look at refactor tractor post request
// }

// const postIng = (data, userId) => {
//   const initObj = { userID: userId, ingredientID: data.id, ingredientModification: data.ingredientModification }
//   const init = {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json"
//     },
//     body: JSON.stringify(initObj)
//   }
//   return fetch("http://localhost:3001/api/v1/users", init)
//   .then(response => response.json())
//   .catch(err => console.log(err.message))
// }

// export default { fetchData, receiveData };
