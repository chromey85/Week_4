let carReg = SD04LNC;
let amountPaid = 10;
let arrive = 800;
let departure = 1200;

class Cars{
        constructor(carReg, arrive, hCost) {
            this. _carReg = carReg;
            this._arrive = arrive;
            this._hCost = hCost;
            this._paid = amountPaid;
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
        get amountPaid() {
            return this._paid;
        }
    };
    calculateCost() {
        return (departure - this.arrive) * this.hCost;
    };
    
    makePayment(amountPaid) {
        if (amountPaid >= this.calculateCost){
            console.log("Parking fee has been paid")
                } else {
                    console.log("parking fee needs to be paid")}
    }