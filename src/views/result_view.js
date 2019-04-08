const PubSub = require('../helpers/pub_sub.js');

const ResultView = function() {

};

ResultView.prototype.bindEvents = function() {
  PubSub.subscribe('PrimeChecker:number-outputted', (event) => {
    const primeNumber = event.detail;
    this.displayResult(primeNumber);
  });
}

ResultView.prototype.displayResult = function (primeNumber) {
  const resultNumber = document.querySelector('#result');
  PubSub.subscribe('PrimeChecker:number-outputted', (event) => {
    if (event.detail === true) {
      resultNumber.textContent = `Yes,it is a prime number`;
    } else {
      resultNumber.textContent = `No, it is not a prime number`;
    }
  })
  resultNumber.textContent = `${primeNumber}`
};

module.exports = ResultView;
