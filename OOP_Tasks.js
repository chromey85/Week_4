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
    // get amountPaid() {
    //     return this._paid;
    // }
};

class StaffCar extends Car {
    constructor(carReg, departure, staffId, credit) {
        super(carReg);
        this._departureTime = departure;
        this._staffId = staffId;
        this._credit = credit;
    }
};

let calculateCost = (arrive, departure) => {
    return (departure - arrive) * this.hCost;
}


let makePayment = (amountPaid) => {
    if (amountPaid >= calculateCost) {
        console.log("Parking fee has been paid")
    } else {
        console.log("parking fee needs to be paid")
    }
}

// console.log(carReg);
// console.log(amountPaid);
// console.log(arrive);
// console.log(departure);

const UAZ7149 = new Car("UAZ7149", 0700)
const lizCar = new StaffCar("UAZ7149", 1200, 12345, 6)

console.log(makePayment(10));

