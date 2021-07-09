'use strict';

describe ( 'Meeting Room' , () => {
  let meetingRoom = new MeetingRoom('Ehelsan\'s Room')
  beforeEach ( () => {
    meetingRoom = new MeetingRoom('Ehelsan\'s Room')
  });

  it('checks if a room is available', () => {
    expect(meetingRoom.isAvailable().toEqual(true));
  });

  it('can enter a meeting room', () => {
    meetingRoom.enterRoom();
    expect(meetingRoom.isAvailable()).toEqual(false);
  });

  it('can leave a meeting room', () => {
    meetingRoom.leaveRoom();
    expect(meetingRoom.isAvailable()).toEqual(true)
  });

  it('error if a meeting room is not available', () => {
    meetingRoom.available = false;
    expect(function(){ meetingRoom.enterRoom();}).toThrowError('Room not available.');
  });
  
});