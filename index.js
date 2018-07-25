// Code your solution in this file!

const drivers = ['Sally', 'Bob', 'Freddy', 'Claudia'];

const returnFirstTwoDrivers= (function (array){ 
 return array.slice(0,2)

})

const returnLastTwoDrivers = (function (array) {
  return array.slice(2,4);
})

let selectingDrivers = [ (returnFirstTwoDrivers),(returnLastTwoDrivers) ];
selectingDrivers[1]


let createFareMultiplier = function (value1) {
  return function () {
    return value1 * value1;
  }
}

const fareDoubler =function (2) {
 
    return value1 * value1;
  }




