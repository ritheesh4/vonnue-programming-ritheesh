// 39. Strong number or not

let digitsArray = [];
let factorialArray = [];
let factorialSum = 0;
let arrayIndex = 0;
let inputNumberCopy = 0;

const strongNumber = (inputNumber) => {
    inputNumberCopy = inputNumber;
    while (inputNumber) {
        digitsArray[arrayIndex] = inputNumber % 10;
        inputNumber = Math.floor(inputNumber / 10);
        arrayIndex++;
    }
    for (let i = 0; i < digitsArray.length; i++) {
        factorialArray[i] = digitsArray[i];
        for (let j = digitsArray[i]; j > 1; j--) {
            factorialArray[i] = factorialArray[i] * (j - 1);
        }
    }
    for (let k = 0; k < factorialArray.length; k++) {
        factorialSum = factorialSum + factorialArray[k];
    }
    if (factorialSum === inputNumberCopy) {
        return "Strong number";
    } else {
        return "Not strong number";
    }
};

console.log("Input number 145: ", strongNumber(145));
console.log("Input number 36: ", strongNumber(36));