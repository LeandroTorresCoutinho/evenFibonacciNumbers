function evenFibonacciNumbersNotExceding(notExceed){
    let num1 = 1, num2 = 2, sum = 0;
    while(sum <= notExceed){
        sum += num1 + num2;
        num1 = num2;
        num2 = sum;
    }
    return sum;
}

console.log(evenFibonacciNumbersNotExceding(4000000))