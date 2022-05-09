const { TestWatcher } = require('jest')
const Scooter = require('../src/Scooter')
const User = require('../src/User')

//typeof scooter === object
describe('scooter object', () => {
  test('is typeof scooter object', () => {
    // edit this to be a real test!
    const newUser = new User('scooterboy16', 'password', 27);
    const newScooter = new Scooter('Dayton', newUser);

    expect(typeof newScooter).toBe('object');
    expect(newScooter.station).toEqual('Dayton');
    expect(newScooter.user.username).toEqual('scooterboy16');
  })

})

//Method tests
describe('scooter methods', () => {
  // tests here!
  test('scooters can be rented if fully charged + not broken', () => {
    const newUser = new User('scooterboy16', 'password', 27);
    const newScooter = new Scooter('Dayton', newUser);
    newScooter.rent();
    expect(newScooter.docked).toBe(false);
  })
  //rent method
  test('can scooter be rented if uncharged', () => {
    const newUser = new User('scooterboy16', 'password', 27);
    const newScooter = new Scooter('Dayton', newUser);
    newScooter.charge = 15;
    newScooter.rent();
    expect(newScooter.docked).toBe(true);
  })

  test('scooters cannot be rented if broken', () => {
    const newUser = new User('scooterboy16', 'password', 27);
    const newScooter = new Scooter('Dayton', newUser);
    //can't rent if broken
    newScooter.isBroken = true;
    newScooter.rent();
    expect(newScooter.docked).toBe(true);
  })
  //dock method
  test('station should be assigned to station property when docked, docked should be assigned as true', () => {
    const newUser = new User('scooterboy16', 'password', 27);
    const newScooter = new Scooter('Dayton', newUser);

    newScooter.dock('Centerville');

    expect(newScooter.user).toBe('');
    expect(newScooter.docked).toBe(true);
    expect(newScooter.station).toBe('Centerville');
  })
  //requestRepair method
  test('scooter.isBroken property should be false after repair', () => {
    const newScooter = new Scooter('Dayton');

    newScooter.repairScooter();

    expect(newScooter.isBroken).toBe(false);
  })
  //charge method
  test("charge", async () => {
    const scooter = new Scooter();
    await scooter.charge(100); // we need to wait for the charge!
    expect(scooter.charge).toEqual(100);
  });

  
})