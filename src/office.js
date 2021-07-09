class Office {
  
  constructor() {
    this.rooms = [];
  };
  createMeetingRoom(room) {
    this.rooms.push(room);
  };

  showRooms() {
    return this.rooms;
  };

}