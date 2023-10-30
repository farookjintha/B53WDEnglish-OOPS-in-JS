// class User {
//   constructor(name, email, city, mobileNumber) {
//     //logic
//     this.name = name;
//     this.email = email;
//     this.city = city;
//     this.mobileNumber = mobileNumber;
//     this.currentPlan = planName;
//     console.log("Constructor is called");
//   }

//   showPremiumPlans = () => {
//     console.log("Premium Plans: ");
//     console.log("3 Devices can be connected simultaneously.");
//     console.log("Unlimited Downloads");
//     console.log("Movies on all languages");
//   };

//   getSubscribedDetails = () => {
//     this.showPremiumPlans();
//   };

//   getProfile = () => {
//     console.log("User's profile: ");
//     console.log("Email: ", this.email);
//     console.log("Name: ", this.name);
//     console.log("City: ", this.city);
//   };

//   getCurrentPlan = () => {
//     console.log(`Your current plan is ${this.currentPlan}`);
//   };

//   renewPlan = (planName) => {
//     this.currentPlan = planName;
//     console.log(`You have renewed your plan to ${this.currentPlan}!`);
//   };

//   validateUser = (email, password) => {
//     if (this.email === email && this.password === password) {
//       console.log("Login successfull");
//     } else {
//       console.log("Invalid credentials");
//     }
//   };
// }

// // this operator -> refers to the current reference or occurence

// // Access the class and its properties by creating an object.

// let user1 = new User(
//   "John",
//   "john@gmail.com",
//   "Bangalore",
//   "+91 12344555",
//   "Silver"
// ); // initializing an object

// let user2 = new User(
//   "Priya",
//   "priya@gmail.com",
//   "Chennai",
//   "+91 22344555",
//   "Gold"
// ); // initializing an object

// user1.getProfile();
// user2.getProfile();
// user1.getCurrentPlan();
// user1.renewPlan("Platinum");
// user1.getCurrentPlan();

// console.log("Accessing class variable outside the class: ", user1.city);
// user1.getSubscribedDetails();
// Constructor = is a function that is executed at first in class, prior to any function or variables inside the class.

// naming conventions
// Class -> PascalCase -> employee details -> EmployeeDetails
// functions and variables -> camelCase -> getEmployeeDetails

class Car {
  constructor(name, brand, model, variant, color, kind = "Hatchback") {
    this.name = name;
    this.brand = brand;
    this.model = model;
    this.variant = variant;
    this.color = color;
    this.kind = kind;
    this.fuelLevel = 0;
    this.tankCapacity =
      this.kind === "SUV" ? 20 : this.kind === "Sedan" ? 18 : 13;
  }

  //setter
  setFuel = (volumeInLitre) => {
    this.fuelLevel =
      this.fuelLevel + volumeInLitre >= this.tankCapacity
        ? this.tankCapacity
        : this.fuelLevel + volumeInLitre;

    this.isTankFull = this.fuelLevel === this.tankCapacity ? true : false;
  };

  //getter
  getFuelLevel = () => {
    return this.fuelLevel;
  };
}

let cretaObj = new Car(
  "Hyundai Creta",
  "Hyundai",
  "Facelift",
  "SX",
  "Black",
  "SUV"
);
console.log("Kind of car: ", cretaObj.kind);

console.log("Fuel at First: ", cretaObj.fuelLevel);

console.log("Filling the fuel: ");
cretaObj.setFuel(5);

let fuelLevelInMyCar = cretaObj.getFuelLevel();

console.log("Getting Fuel after Filled: ", fuelLevelInMyCar);

console.log("Retrieving the fuel Level (key): ", cretaObj.fuelLevel);

cretaObj.setFuel(10);

console.log(
  "Fuel Level in my car after refilling again: ",
  cretaObj.getFuelLevel()
);

cretaObj.setFuel(10);

console.log("Getting Fuel after Filled: ", cretaObj.fuelLevel);

console.log(cretaObj.isTankFull ? "My Tank is Full" : "My Tank is not full");

let i20Obj = new Car(
  "Hyundai i20",
  "Hyundai",
  "Sportz",
  "1.2 Kappa Engine",
  "White"
);
console.log("i20 Obj: ", i20Obj.kind);
