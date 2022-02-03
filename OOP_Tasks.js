//// ---------- Carpark Challenge
//
// class Car{
//     constructor(regNum) {
//         this._regNum = regNum;
//         this._hours = 0;
//         this._charge = 0.00;
//     }

//     get regNum(){
//         return this._regNum;
//     }
//     get hours(){
//         return this._hours;
//     }
//     get charge(){
//         return this._charge;
//     }
//     increaseHours(){
//         this._hours++;
//         this._charge += 1.50;
//     }
// }

// const pay = (reg, hr) => {
//     const car = new Car(reg);
//     for (i = 0; i < hr; i++){
//         Car.increaseHours();
//     }
//     return `You need to pay £${Car.charge} for ${Car.hours} hours.`;
// }
// console.log(pay("SD04LNC", 5));

// let carReg = "SD04LNC";
// let amountPaid = 10;
// let arrive = 800;
// let departure = 1200;

class Car {
    constructor(carReg, arrive) {
        this._carReg = carReg;
        this._arrive = arrive;
        this._hCost = 1.50;
        // this._paid = amountPaid;
    }
    get carReg() {
        return this._carReg;
    }
    get arrive() {
        return this._arrive;
    }
    get hCost() {
        return this._hCost;
    }
    calculateCost() {
        return ((this._departure - this._arrive) * this.hCost) / 100;
    }
    getDepart(departure) {
        this._departure = departure;     
    }
    makePayment(amountPaid) {
        if (amountPaid >= this.calculateCost()) {
            console.log("Parking fee has been paid")
        } else {
            console.log("parking fee needs to be paid")
        }
    }
    // get amountPaid() {
    //     return this._paid;
    // }
};

class StaffCar extends Car {
    constructor(carReg, arrive, departure, staffId, credit) {
        super(carReg, arrive, departure);
        this._departure = departure;
        this._staffId = staffId;
        this._credit = credit;
    }
        applyDiscount() {
            this._hCost /= 4;
        }
};

const UAZ7149 = new Car("UAZ7149", 700);
const lizCar = new StaffCar("UAZ7149", 700, 1200, 12345, 6);

console.log(UAZ7149);
console.log(lizCar);
UAZ7149.getDepart(1200);
console.log(UAZ7149.calculateCost());
UAZ7149.makePayment(7);

// console.log(carReg);
// console.log(amountPaid);
// console.log(arrive);
// console.log(departure);

//// ---------- Cyber Pet


//// ---------- Cyber Pet DOM


// ---------- Scope and Higher Order Functions - Activity 1

// const bootCamp = () => {
//     console.log("This bootcamp is a challenge")
// }

// const func = (fn) => {
//     for (i = 0; i < 5; i++){
//         fn();
//     }
// }

// func(bootCamp);

// ---------- Scope and Higher Order Functions - Activity 2

// let num = [18, 28, 13, 19, 26]

// let xNum = num.map(output)

// function output(num){
//     return num * 3;
// }

// console.log(xNum);

//// ---------- Scope and Higher Order Functions - Activity 3

// let num1 = 5;
// let num2 = 6;

// const add = (a, b) => { 
//     return a + b; 
// } 
// const subtract = (a, b) => { 
//     return a - b; 
// } 
// const multiply = (a, b) => { 
//     return a * b; 
// } 
// const divide = (a, b) => { 
//     return a / b; 
// } 
// const doMaths = (num1) => { 
//     return (num2, fn) => { 
//         return fn(num1, num2); 
//     } 
// }

// const mathArray = [add, subtract, multiply, divide];

// const workItOut = doMaths(num1);
// for (i = 0; i < mathArray.length; i++){
//         const fn = mathArray[i]; 
//         workItOut(num2, fn);
//     } 

// console.log(doMaths);

//// ---------- Scope and Higher Order Functions - Zeller’s algorithm 1

// let d = 15;
// let m = 03;
// let y = 1985;
// // let f = 0;
// // let l = 0;
// // let s = 0;

// if (m < 3){
//     m = m + 12;
//     y = y - 1;
// }

// let f = Math.floor(y / 100);
// let l = y - (100 * f);

// let s = Math.floor((2.6 * m) - 5.39) + Math.floor(f / 4) + d + l - (2 * f);
// let x = s - (7 * Math.floor(s / 7));

// console.log(x);

// let daysOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

// console.log(daysOfWeek[`${x-1}`]);