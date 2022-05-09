class Scooter{
  // scooter code here
  constructor(station, user) {
    this.station = station
    this.user = user
    this.serialNumber = Math.floor(Math.random() * 100)
    this.charge = Math.floor(Math.random() * 100)
    this.isBroken = false
    this.docked = true
  }

  rent() {
    if(!this.isBroken && this.charge > 20) {
      this.docked = false;
      console.log('Be safe out there!');
    }else if(this.charge < 20){
      console.log('Battery is too low! Charge or select a new scooter');
    }else {
      console.log('Scooter needs repairs');
    } 
  }

  dock(station) {
    this.station = station;
    this.user = '';
    this.docked = true;
    
  }

  async charge() {
    console.log('Starting charge');

    await new Promise(resolve => setTimeout(resolve, 2000)); // wait 2 seconds
    this.charge = 100

    console.log('Charge complete');   
  }

  repairScooter() {

    console.log("Repair on the way")

    //setTimeout(() => {
   //}, 2000)
    this.isBroken = false
    console.log('Repairs are done')
  }
}



module.exports = Scooter
