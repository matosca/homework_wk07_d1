const FormView = require('./views/form_view.js');
const PrimeNumberChecker = require('./models/prime_checker.js');
const ResultView = require('./views/result_view.js');

document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript Loaded');

  const formView = new FormView();
  formView.bindEvents();

  const primeChecker = new PrimeNumberChecker();
  primeChecker.bindEvents();

  const resultedPrimeNumber = new ResultView();
  resultedPrimeNumber.bindEvents();
});
