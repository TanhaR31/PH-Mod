// Assignment start

// Funtion 1
function seerToMon(seer) {
    if (typeof (seer) !== 'number') {
        return "Please Type 1 Number For 1st Function !!!";
    }
    else {
        const mon = seer / 40;
        return mon;
    }
}
// console.log(seerToMon('40'));
// console.log(seerToMon(40));
// console.log('');

// Funtion 2
function totalSales(shirtQ, pantQ, shoeQ) {
    if (typeof (shirtQ) !== 'number' || typeof (pantQ) !== 'number' || typeof (shoeQ) !== 'number') {
        return "Please Type 3 Numbers For 2nd Function !!!";
    }
    else {
        const shirtPrice = 100;
        const pantPrice = 200;
        const shoePrice = 500;

        totalPrice = shirtPrice * shirtQ + pantPrice * pantQ + shoePrice * shoeQ;

        return totalPrice;
    }
}
// console.log(totalSales('1', 1, 1));
// console.log(totalSales(1, 1, 1));
// console.log('');

// Funtion 3
function deliveryCost(product) {
    if (typeof (product) !== 'number') {
        return "Please Type 1 Number For 3rd Function !!!";
    }
    else {
        const first100 = 100;
        const second100 = 80;
        const rest = 50;

        if (product <= 100) {
            const firstPrice = first100 * product;
            const totalPrice = firstPrice;
            return totalPrice;
        }
        else if (product > 100 && product <= 200) {
            const firstPrice = first100 * 100;
            const secondPrice = second100 * (product - 100);
            const totalPrice = firstPrice + secondPrice;
            return totalPrice;
        }
        else {
            const firstPrice = first100 * 100;
            const secondPrice = second100 * 100;
            const restPrice = rest * (product - 200);
            const totalPrice = firstPrice + secondPrice + restPrice;
            return totalPrice;
        }
    }
}
// console.log(deliveryCost('201'));
// console.log(deliveryCost(201));
// console.log('');

// Funtion 4
function perfectFriend(names) {
    if (typeof (names) !== 'object') {
        return "Please Give An Array Of Friends Name For Last Function !!!";
    }
    else {
        for (const name of names) {
            if (name.length == 5) {
                var friend = name;
                break;
            }
        }
        return friend;
    }
}
// console.log(perfectFriend('Titan'));
// console.log(perfectFriend(['Tita', 'Titan', 'Tanha']));

// Assignment end

// 22_5
function recursiveFactorial(number) {
    if (number == 1) {
        return 1;
    }
    return (number * recursiveFactorial(number - 1));
    // 5*recursiveFactorial(4)
    // 4*recursiveFactorial(3)
    // 3*recursiveFactorial(2)
    // 2*recursiveFactorial(1)
    // 1
}
let recursiveFactorialAns = recursiveFactorial(5);
console.log(recursiveFactorialAns);

// Fn = Fn-1 + Fn-2
// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, …
const fibo = [0, 1];
for (let i = 2; i < 10; i++) {
    fibo[i] = fibo[i - 1] + fibo[i - 2];
}
console.log(fibo);

function fibonacci(n) {
    if (n == 0) {
        // return 0;
        return [0];
    }
    if (n == 1) {
        // return 1;
        return [0, 1];
    }
    // return fibonacci(n-1)+fibonacci(n-2);
    // n = 4
    // fibonacci(3) + fibonacci(2)
    // { fibonacci(2) + fibonacci(1) } + { fibonacci(1) + fibonacci(0) }
    // {{ fibonacci(1) + fibonacci(0) } + 1}+{1+0}
    // 1+0+1+1+0
    // 3

    const series = fibonacci(n - 1);
    series[n] = series[n - 1] + series[n - 2];
    return series;
}
var fibonacciAns = fibonacci(4);
console.log(fibonacciAns);

// break=stop
// continue=skip