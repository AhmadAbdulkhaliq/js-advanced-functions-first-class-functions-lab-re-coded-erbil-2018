// Code your solution in this file!
  const drivers = ['Sally', 'Bob', 'Freddy', 'Claudia'];

const returnFirstTwoDrivers= (function (array){ 
 return array.slice(0,2)

})

const returnLastTwoDrivers = (function (array) {
  return array.slice(2,4);
})

const selectingDrivers = [ (returnFirstTwoDrivers),(returnLastTwoDrivers) ];
selectingDrivers[1]


const createFareMultiplier = function (mValue) {
  return function (value) {
    return mValue * value;
  };
};
