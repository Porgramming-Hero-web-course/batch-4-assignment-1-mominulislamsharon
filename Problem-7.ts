class Car  {
  carName : string;
  model: string;
  year: number;


  constructor(carName:string, model: string, year: number){
    this.carName = carName;
    this.model = model;
    this.year = year;
  }

  getCarAge(): number {
    const newYear = new Date().getFullYear();
    return newYear - this.year;
  }
}

 const car = new Car("Honda", "Civis", 2018);
 console.log(car.getCarAge());



