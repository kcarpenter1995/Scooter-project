const User = require('./User')
const Scooter = require('./Scooter')

class ScooterApp {
  // ScooterApp code here

  static scooterSession = [];

  constructor() {
    this.scooterHub = {
      'Beavercreek': [],
      'Dayton': [],
      'Centerville': [],
    }
    this.userList = {};
    
  }
  
  register(user) {
    if(!this.userList[user.username]) {
      if(user.age > 18) {
        this.userList[user.username] = {
          password: user.password,
          age: user.age,
          loginStatus: false
        }
        console.log(`Welcome ${user.username}, you're registration has been completed. You may log in now.`)
      } else {
        console.log('You are too young');
      }

    } else if(this.userList[user.username]) {
      console.log(`${user.username} is already in use. Please login or register a new Username`);
    }
  
  }

  login(username, password) {

    if(this.userList[username] && this.userList[username].password === password) {
      this.userList[username].loginStatus = true;
      console.log(`Welcome back, ${username}, have a safe ride`)
      return username
    } else {
      console.log('Username or Password is incorrect')
    }
  }

  addScooter(location, scooter) {
    scooter.station = location;
    this.scooterHub[location].push(scooter);
  }

  removeScooter(decomScooter) {
    const serial = decomScooter.serialNumber;
    let scooterArray = this.scooterHub[decomScooter.station];
    let scooterIndex = -1;

    scooterArray.find((scooter,i) => {
      if(scooter.serialNumber === serial){
        scooterIndex = i;
      }
    })
    scooterArray.splice(scooterIndex,1)
    

  }

  
  


  
}

module.exports = ScooterApp
