/// constructor = special method for defining the 
//                 properties and methods of objects
//       
//                          


function Car(make, model, year, color){
    this.make = make;
    this.model = model;
    this.year = year;
    this.color = color;
}



const car1 = new Car("Honda", "Civic", 2009, "black");

console.log(`The car you've chosen is a ${car1.make} ${car1.model} year of ${car1.year} and has a color of ${car1.color} `);