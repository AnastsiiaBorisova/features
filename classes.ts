class Vehicle{

constructor (public color : string) {
}

protected honk():void{
  console.log('beep')
}
}

class Car extends Vehicle {
constructor(public wheels:number, color : string){
  super(color)
}

  private drive():void{
    console.log('vroom')
  }
  
  startDrivingProcess():void{
    this.drive()
  }
}
const vehicle = new Vehicle('orange')

console.log(vehicle.color)

const car_new = new Car(4,'red')

//car_new.startDrivingProcess()

