console.log("test");

function add(number1, number2) {
    return number1 + number2;
}

function sub(number1, number2) {
    return number1 - number2;
}

function multiply(number1, number2) {
    return number1 * number2;
}

function divide(number1, number2) {
    return number1 / number2;
}

function pow(number, power) {
    if (power === 0) return 1;
    else return number * pow(number, power-1);
}








