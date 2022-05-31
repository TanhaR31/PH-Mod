const name = 'Tanha';
console.log(name);
// name='Reja';
// console.log(name);

function inchToFeet(inch) {
    return (inch / 12);
}

let myInch = 21;
console.log(inchToFeet(myInch));

function factorial(number) {
    var factorial = 1;
    for (i = 1; i <= number; i++) {
        // console.log(i);
        factorial = factorial * i;
        // console.log(factorial);
    }
    console.log(factorial);
}
factorial(5);

function invFactorial(number) {
    var invFactorial = 1;
    for (inv = number; inv >=1 ; inv--) {
        // console.log(inv);
        invFactorial = invFactorial * inv;
        // console.log(invFactorial);
    }
    console.log(invFactorial);
}
invFactorial(5);

// recursion function calls itself and has termination condition
function recursiveFactorial(number){
    if(number==1){
        return 1;
    }
    return (number*recursiveFactorial(number-1));
}
let recursiveFactorialAns = recursiveFactorial(5);
console.log(recursiveFactorialAns);