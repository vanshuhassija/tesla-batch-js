class Vehicle {
  constructor(noOfPeopleItCanCarry, noOfEngines, wheels) {
    this.people = noOfPeopleItCanCarry;
    this.engines = noOfEngines;
    this.wheels = wheels;
  }

  getPropertySpecs = () => {
    console.log(
      `This vehicle has ${this.people} people and wheels as ${this.wheels}`
    );
  };
}

const car = new Vehicle(5, 2, 4);
car.getPropertySpecs();

//Whenever you call new keyword
// A brand new object is created somewhere.
// Newly constructed object is Prototype linked (Later)
//Newly constructed object is set as this binding for function

//class -> A blueprint of how object would look like
// object -> instantiated from class

//Inheritence and Polymorphism
class Car extends Vehicle {
  //Assignment 2: What type of copy it is: Reference or value
  constructor() {}

  getPropertySpecs = () => {
    console.log("Hello");
  };
}

const tesla = new Car("tesla");
tesla={
  getPropertySpecs:() => {
    console.log("Hello");
  };
}


tesla.getPropertySpecs();

const expectedHangedParts=["head","abdomen","arm1","arm2","leg1","leg2"]
const hangedParts=[""];
const wrongCharacters=[];
const word="application"

window.addEventListener("keydown",(event)=>{
  //Value of character?
  if(characterIsInword()){
    //Append that at appropriate place in word
  }
  else{
    // Push the character in wrong list
    // Lookup the hangedParts array and hang the next Part
    if(hangedParts.length===6){
      //Show Popup of Lost Game
    }
    if(wordIsCompleted()){
      // Show Popup for You won.
    }
  }
})