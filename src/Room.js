class Room {
  constructor(newRoom) {
    this.number = newRoom.number;
    this.roomType = newRoom.roomType;
    this.bidet = newRoom.bidet;
    this.bedSize = newRoom.bedSize;
    this.numBeds = newRoom.numBeds;
    this.costPerNight = newRoom.costPerNight;
  }
}

export default Room;
