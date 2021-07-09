'use strict';

describe('Office', () => {
  let office;
  let roomone;
  let roomtwo;

  beforeEach( () => {
    office = new Office();
    roomone = new MeetingRoom('Ehelsan\'s Room')
    roomtwo = new MeetingRoom('Ehelsan\'s Other Room')
  })

  it('can add a meeting room', () => {
    office.createMeetingRoom(roomone);
    expect(office.rooms).toEqual([roomone])
  });

  it('can show all meeting rooms', () => {
    office.createMeetingRoom(roomone);
    office.createMeetingRoom(roomtwo);
    expect(office.showRooms()).toEqual([roomone, roomtwo])
  });

}); 