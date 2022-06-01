// const number =  Math.round(Math.random()*100);
// console.log(number);
console.log(Math.round(Math.random() * 10000));

var first = 5;
var second = 10;
[first, second] = [second, first];
console.log(first, second);

function arrTotal(numbers) {
    var sum = 0;
    for (i = 0; i < numbers.length; i++) {
        // console.log(arr[i]);
        sum += numbers[i];
    }
    return sum;
}

const arr = arrTotal([1, 2, 3, 4, 5]);
console.log(arr);

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
        return [0,1];
    }
    // return fibonacci(n-1)+fibonacci(n-2);
    const series = fibonacci(n - 1);
    series[n] = series[n - 1] + series[n - 2];
    return series;
}
var fibonacciAns = fibonacci(9);
console.log(fibonacciAns);

