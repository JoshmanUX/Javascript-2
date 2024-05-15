//Classes

//object
const dog = {
  color: "black",
  gender: "Male",
};

//`` <= temperate literal
//Dog Class + Constructor
class Dog {
  constructor(color, gender) {
    this.color = color;
    this.gender = gender;
  }
  bark() {
    //Method
    console.log(`The $(this.color) dog has barked.`);
  }
}

class Shepard extends Dog {
  constructor(color, gender, name) {
    super(color, gender); //SUPER takes from parent
    this.name = name;
  }
  run() {
    //Method
    console.log(`The ${this.color} dog named ${this.name} began to run!`);
  }
}

const dog1 = new Dog("Brown", "Male");
const dog2 = new Dog("White", "Female");
const Shep1 = new Shepard("Blackish", "Male", "Nessie");
console.log(dog1);
console.log(dog2);

dog2.bark();
Shep1.run();


