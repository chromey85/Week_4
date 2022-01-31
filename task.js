let string = "Pizza"
let num = 12
let b = true

let cars = ["Nissan", "Toyota", "Ford", "Honda"]

console.log(cars)

// for (let i = 0; 1 < cars.length; i++) {
//     console.log(cars[i]);
// }

let rosie = {
    _name: "Rosie",
    _thirst: 50,
    _isWiggling: false,
    _isHopping: false,
    get name() {
        return this._name;
    },
    get thirst() {
        this._thirst -= 10;
        return this._thirst;
    },
    get wiggling() {
        return this._isWiggling;
    },
    get hopping() {
        return this._isHopping;
    }
}

console.log(rosie.name);
console.log(rosie.thirst);

class Cars{
    constructor(carReg) {
        this. _carReg = carReg;
        this. _timeHours = 2;
        this. _timeMins = 0;
    }
    get carReg() {
        return this._carReg;
    }
    get hours() {
        return this._timeHours;
    }
    get mins() {
        return this._timeMins;
    }
}

const carReg = new Cars("SD04LNC")

console.log(carReg.hours*1.5)