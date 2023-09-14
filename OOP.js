// класс - это некоторые описание характеристик
// объект - это конкретный экземпляр у которого 
//каждая характеристика 
// имеет какое-то значение н: имя = Вася
// эти характеристики называются свойствами
// а действия который может совершать тот объект,
// назыаются методами

// ООП 
// инкапсуляйия
// наследование 
// полимарфизм

////////////////////////////////////////////////////
class Car {
    #fuel = 50
  
    getFuel () {
      return this.#fuel
    }
  
    setFuel (value) {
      this.#fuel = value
      if (value > 100) this.#fuel = 100
    }
  }
  
  const car = new Car()
  console.log(car.getFuel()) // 50
  
  car.setFuel(3000)
  console.log(car.getFuel()) // 100 

////////////////////////////////////////////////////
// // дз 2
class User {
    constructor(firstname, surname){
    this.firstname = firstname 
    this.surname = surname
    }
getFullName(){
    return this.firstname + ' ' + this.surname
}
}
 class Student extends User{
    constructor(firstname, surname, year){
    super(firstname, surname)
    this.year = year
    }
    getCourse(){
        let heryears = new Date().getFullYear();
        return heryears - this.year;
    }
}
let studentme = new Student('Akeeva', 'Aidana', 2022);
       console.log(studentme.getFullName());
       console.log(studentme.getCourse());

//////////////////////////////////////////////////////
// //  дз 3
// const Car = function (make,speed){
//         this.make = make
//         this.speed = speed
//     }
// Car.prototype.output = function(){
//     console.log(`Name: ${this.make} speed: ${this.speed}`);
// }
// Car.prototype.speedI = function(){
//     this.speed += 5
 
// console.log(`эта машина  ${this.make}   едет со скоростью ${this.speed} km/h`);
// }
// const ford = new Car('Ford', 200)
// ford.output()
// ford.speedI()
////////////////////////////////////////////////////////////////////

// доп дз

class Peoples{
        speak(){
            console.log('Theacher speaks ');
        }
    }
    class American extends Peoples{
        speak(){
            console.log('english'); //extends - наследуется от People
        }
    }
    class Russian extends Peoples{
        speak(){
            console.log('russian');
        }
    }

//////////////////////////////////////////

class Telephone{
    name(){
        console.log("it is your phone");
   }
}
class Nokia extends Telephone{
    name(){  console.log("nokia");
  }
} 

class Iphone extends Telephone{
    name(){
        console.log("Iphone");
    }
}

class Redme extends Telephone{
    name(){
        console.log("redme");
  }
}
// // ////////////////////////////////////////////////////















