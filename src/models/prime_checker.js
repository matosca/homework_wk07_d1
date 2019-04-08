const PubSub = require('../helpers/pub_sub.js');

const PrimeNumberChecker = function(){

};

PrimeNumberChecker.prototype.bindEvents = function(){

  PubSub.subscribe('FormView:number-inputted', (event) => {
    const inputtedNumber = event.detail;
    // console.log(inputtedNumber);

    const resultedNumber = this.numberIsPrime(inputtedNumber);
    // console.log(resultedNumber);

    PubSub.publish('PrimeChecker:number-outputted', resultedNumber);
  });
};

PrimeNumberChecker.prototype.numberIsPrime = function (number) {
  if (number <= 1) {
      return false;
    }
    for (let i = 2; i < number; i++) {
      if (number % i === 0) {
          return false;
      }
    }
    return true;
};

module.exports= PrimeNumberChecker;
