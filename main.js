var numberBox = document.querySelector('#numberBox');
var calculateButton = document.querySelector('#calculateFactors');
var factorZone = document.querySelector('#factorZone');
var currentNumber = document.querySelector('#currentNumber');

var factors = [];
var squareFactors = [];

function calculateFactors() {
    var num = numberBox.value;
    clearFactorZone();
    factors = [];
    squareFactors = [];
    var timeBeforeCalculatingFactors = Date.now();
    for (let i = 0; i <= num/2; i++) {
        if (num % i == 0) {
            factors.push(i);
        }
    }
    factors.push(num);
    console.log("Calculating factors took: " + (Date.now() - timeBeforeCalculatingFactors) + " ms");
    console.log(factors);
    var timeBeforeCalculatingSquareFactors = Date.now();
    for (let factor = 0; factor < factors.length; factor++) {
        const element = factors[factor];
        if (Number.isInteger(Math.sqrt(element))) {
            squareFactors.push(element);
        }
    }
    console.log("Calculating square factors took: " + (Date.now() - timeBeforeCalculatingSquareFactors) + " ms");
    console.log(squareFactors);
    var factorsElement = document.createElement('p')
    factorsElement.innerText = "Here are the factors: " + factors
    factorZone.append(factorsElement);

    var squareFactorsElement = document.createElement('p')
    squareFactorsElement.innerText = "Here are the square factors: " + squareFactors
    factorZone.append(squareFactorsElement);

}

function clearFactorZone() {
    while (factorZone.firstChild) {
        factorZone.removeChild(factorZone.firstChild);
    }
}

calculateButton.addEventListener('click', calculateFactors);