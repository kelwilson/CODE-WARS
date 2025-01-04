// Dedscription :

// Classy Classes
// Basic Classes, this kata is mainly aimed at the new JS ES6 Update introducing classes

// Task
// Your task is to complete this Class, the Person class has been created. You must fill in the Constructor method to accept a name as string and an age as number, complete the get Info property and getInfo method/Info getter which should return johns age is 34


// Solution :
class Person {
    // PREP [Parameters, Returns, Examples, Psuedo-codes]
       //  Parameter :
          // fill in the constructor method
      constructor(name, age) {
        console.log(age, name)
      this.name = name;
      this.age = age;
    }
  
    get info() {
      
      return `${this.name}s age is ${this.age}`;
    }
    
     getInfo() {
      return `${this.name}s age is ${this.age}`;
    }
  }

//   Solution 2:

class Person {
    constructor(name, age) {
      this.info = `${name}s age is ${age}`;
    }
  }

//   Solution 3:

class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
    
    get info() {
      return this.getInfo();
    }
  
    getInfo() {
      return `${this.name}s age is ${this.age}`;
    }
  }