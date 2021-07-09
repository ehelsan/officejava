'use strict';

class MeetingRoom {
  constructor(name) {
    this.available = true
    this.name = name
  };

  isAvailable() {
    return this.available;
  };

  enterRoom() {
    if(this.available === false) {
      throw new Error('Room not available.');
    };
    return this.available = false;
  };

  leaveRoom() {
    return this.available = true;
  };
} 

