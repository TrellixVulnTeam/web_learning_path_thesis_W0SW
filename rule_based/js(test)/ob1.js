class Animal {

    constructor(name) {
      this.speed = 0;
      this.name = name;
    }
  
    // ...
  }
  
  class Rabbit extends Animal {
  
    constructor(name, earLength) {
      super(name);
      this.earLength = earLength;
    }
  
    // ...
  }


  

  // now fine
let rabbit = new Rabbit();
rabbit.name = "Sge"
rabbit.earLength = 123;
let x1 = rabbit.earLength;

rabbit.earLength = 55;
let x2 = rabbit.earLength;


console.log(x1);
console.log(x2);
console.log(rabbit.name);