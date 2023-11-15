class uberPrice {
    constructor(ratePerKm, ratePerMin, waitingPerMin,baseFare,mainFareSupplement,shareAdjustment) {
        this.ratePerKm = ratePerKm;
        this.ratePerMin = ratePerMin;
        this.waitingPerMin = waitingPerMin;
        this.baseFare = baseFare;
        this.mainFareSupplement = mainFareSupplement;
        this.shareAdjustment = shareAdjustment;
    }
    calculatePrice(totalDistance, totalTime, totalWaitingTime) {
        return  this.baseFare + (this.ratePerKm * totalDistance) + (this.ratePerMin * totalTime) + this.mainFareSupplement + (this.waitingPerMin * totalWaitingTime ) + this.shareAdjustment;
    }
}

//fixed fares;
const ratePerKm = 0.6400;
const ratePerMin = 0.1360;
const waitingPerMin = 0.2080;
const baseFare = 0.84;
const mainFareSupplement = 0.62;
const shareAdjustment = 0.08;

//creating fixed object
const basePrice = new uberPrice(ratePerKm,ratePerMin,waitingPerMin,baseFare,mainFareSupplement,shareAdjustment);

// console.log(basePrice);
//total distance, time and waitingtime
let totalDistance = 1.84;
let totalTime = 4.17;
let totalWaitingTime = 0.66;

let totalPrice = basePrice.calculatePrice(totalDistance,totalTime,totalWaitingTime);
console.log(`Your total amount is $${totalPrice.toFixed(2)}`);