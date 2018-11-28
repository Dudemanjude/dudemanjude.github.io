var numberBox = document.querySelector('#numberBox');
var calculateButton = document.querySelector('#calculateFactors');
var factorZone = document.querySelector('#factorZone');

var factors = [];
var squareFactors = [];

function calculateFactors() {
    var num = numberBox.value;
    clearFactorZone();
    factors = [];
    squareFactors = [];
    
    for (let i = 0; i <= num; i++) {
        if (num % i == 0) {
            factors.push(i);
        }
    }
    console.log(factors);
    for (let factor = 0; factor < factors.length; factor++) {
        const element = factors[factor];
        if (Number.isInteger(Math.sqrt(element))) {
            squareFactors.push(element);
        }
    }
    var factorsElement = document.createElement('p')
    factorsElement.innerText = "Here are the factors: " + factors
    factorZone.append(factorsElement);

    var squareFactorsElement = document.createElement('p')
    squareFactorsElement.innerText = "Here are the square factors: " + squareFactors
    factorZone.append(squareFactorsElement);

    console.log(squareFactors);
}

function clearFactorZone() {
    while (factorZone.firstChild) {
        factorZone.removeChild(factorZone.firstChild);
    }
}

calculateButton.addEventListener('click', calculateFactors);