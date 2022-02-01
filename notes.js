// let string = "Pizza"
// let num = 12
// let b = true

// let cars = ["Nissan", "Toyota", "Ford", "Honda"]

// console.log(cars)

// // for (let i = 0; 1 < cars.length; i++) {
// //     console.log(cars[i]);
// // }

// let rosie = {
//     _name: "Rosie",
//     _thirst: 50,
//     _isWiggling: false,
//     _isHopping: false,
//     get name() {
//         return this._name;
//     },
//     get thirst() {
//         this._thirst -= 10;
//         return this._thirst;
//     },
//     get wiggling() {
//         return this._isWiggling;
//     },
//     get hopping() {
//         return this._isHopping;
//     }
// }

// console.log(rosie.name);
// console.log(rosie.thirst);

// class Cars{
//     constructor(carReg) {
//         this. _carReg = carReg;
//         this. _timeHours = 2;
//         this. _timeMins = 0;
//     }
//     get carReg() {
//         return this._carReg;
//     }
//     get hours() {
//         return this._timeHours;
//     }
//     get mins() {
//         return this._timeMins;
//     }
// }

// const carReg = new Cars("SD04LNC")

// console.log(carReg.hours*1.5)

// // // This is another example of how to do an OOP

// // class Car{
// //     constructor(regnum){
// //     this._regnum = regnum;
// //     this._hours = 0;
// //     this._charge = 0.00;
// //     }
// //     get regnum(){
// //     return this._regnum;
// //     }
// //     get hours(){
// //     return this._hours;
// //     }
// //     get charge(){
// //     return this._charge;
// //     }
// //     increaseHours(){
// //     this._hours++;
// //     this._charge += 1.50;
// //     }
// //    }
// //    const pay = (reg, hr) => {
// //     const car = new Car(reg);
// //     for (i = 0; i < hr; i++){
// //     car.increaseHours();
// //     }
// //     return `You need to pay £${car.charge} for ${car.hours} hours.`;
// //    }
// //    console.log(pay("M7 CAR", 5)); //Output: You need to pay £7.5 for 5 hours.

// class Enemy {
//     constructor(name, health) {
//         this._name = name;
//         this._health = health;
//         this._weapons = ["sword", "bow"];
//     }
//     get name() {
//         return this._name;
//     }
//     get health() {
//         return this._health;
//     }
//     get weapons() {
//         return this._weapons;
//     }
//     reduceHealth(amount) {
//         return this._health -= amount;
//     }
// }

// const enemy1 = new Enemy("Yusuf", 1000);
// const enemy2 = new Enemy("Jordan", 1000);

// console.log(enemy1.reduceHealth(100));
// console.log(enemy2.health);
// console.log(enemy2.reduceHealth(100));

// class Animal{
//     constructor (name){
//         this._name = name;
//         this._hunger = 100;
//         this._thirst = 100;
//     }
//     get name(){
//         return this._name
//     }
//     get hunger(){
//         return this._hunger
//     }
//     get thirst(){
//         return this._thirst
//     }
//     eat(){
//         this._hunger--;
//     }
//     drink(){
//         this._thirst--;
//     }
// }

// class Bunny extends Animal {
//     constructor(name, lovesCarrot){
//         super(name);
//         this._lovesCarrot = lovesCarrot;
//     }
//     get lovesCarrot(){
//         return this._lovesCarrot;
//     }
// }

// const rosie = new Bunny("Rosie", true);

// class Bunny extends Animal {
//     constructor(name, lovesCarrot, favFood){
//         super(name);
//         this._lovesCarrot = lovesCarrot;
//         this._favFood = favFood;
//     }
//     get lovesCarrot(){
//         return this._lovesCarrot;
//     }
//     get lovesCarrot(){
//         return this._lovesCarrot;
//     }
// }

// const rosie = new Bunny("Rosie", true, ["basil", "rocket", "broccoli"]);

// let stringLet = "let string"; 
// let stringVar = "var string"; 

// const newString = () => { 
//     let stringLet = "new let string"; 
//     var stringVar = "new var string"; 
//     console.log(`Inside function: ${stringLet}`); //new 
//     console.log(`Inside function: ${stringVar}`); //new 
// } 

// newString(); 
// console.log(stringLet); //old 
// console.log(stringVar); //old

// //*Variable declared inside the function will exist inside the function only.


