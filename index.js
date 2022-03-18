// Code your solution in this file!
const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];

function returnFirstTwoDrivers() {
    return drivers.slice(0, drivers.length-2)
}

function returnLastTwoDrivers() {
    return drivers.slice(2)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(multiplier) {
    return function(fare) {
        return fare * multiplier;
    }
}

const fareDoubler = function(fare){
    return createFareMultiplier(2)(fare);

} 

const fareTripler = function(fare){
    return createFareMultiplier(3)(fare);

} 

// const selectDifferentDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const selectDifferentDrivers = (arrayOfDrivers, returnFirstTwoDrivers) => {
    return returnFirstTwoDrivers(arrayOfDrivers);
}

