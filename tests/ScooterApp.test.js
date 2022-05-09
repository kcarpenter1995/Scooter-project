const Scooter = require('../src/Scooter')
const User = require('../src/User')
const ScooterApp = require('../src/ScooterApp')

// ScooterApp tests here
describe('scooterSessions property', () => {
    test('static property can only be called on the class and not instances', () => {
      const newScooter = new ScooterApp();
  
      expect(newScooter.scooterSessions).toEqual(undefined);
      expect(ScooterApp.scooterSessions).toEqual(undefined);
  
    })
})
// register user
describe('scooterApp register method', () => {

    test('can register new users', () => {
      const newScooterApp = new ScooterApp();
      const newUser = new User('scooterboy16', 'password', 27);
  
      newScooterApp.register(newUser);
  
      expect(newScooterApp.userList['scooterboy16']).toEqual({
        password: 'password',
        age: 27,
        loginStatus: false
      })
    }) 

    test('will reject user registration if age is under 17', () => {
        const newScooterApp = new ScooterApp();
        const newUser = new User('scooterboy16', 'password', 17);
    
        newScooterApp.register(newUser);
    
        expect(newScooterApp.userList['scooterboy16']).toEqual(undefined);
    })

    test('will reject user registration user already exists', () => {
        const newScooterApp = new ScooterApp();
        const newUser = new User('scooterboy16', 'password', 27);
    
        newScooterApp.register(newUser);
    
        const newUser2 = new User('scooterboy16', 'password2', 34);
    
        newScooterApp.register(newUser2);
    
        expect(newScooterApp.userList['scooterboy16'] === newUser2).toBe(false);
    
    
    })
})

// log in
describe('scooterApp login method', () => {
    test('can register new users', () => {
      const newScooterApp = new ScooterApp();
      const newUser = new User('scooterboy16', 'password', 40);
  
      newScooterApp.register(newUser);
      newScooterApp.login('scooterboy16', 'password');
  
      expect(newScooterApp.userList).toHaveProperty('scooterboy16');
    })
})
// add scooter
describe('add scooter method', () => {
    test('should add scooter only if location and scooter instance is passed', () => {
      const newScooterApp = new ScooterApp();
      const newScooter = new Scooter('Dayton');

      newScooterApp.addScooter('Dayton', newScooter);

      expect(newScooterApp.scooterHub['Dayton'].length).toBe(1);

    })
})
// remove scooter
describe('remove scooter method', () => {
    test('target scooter should be removed from the matching station array', () => {
      const newScooterApp = new ScooterApp();
      const newScooter = new Scooter('Dayton');

      newScooterApp.removeScooter(newScooter);

      expect(newScooterApp.scooterHub['Dayton'].indexOf(newScooter)).toBe(-1);

    })
})