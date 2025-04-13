const fibonacci = function(number) {
    const inputNumber = Number(number)
    if(number < 0) { return "OOPS"}

    let fibonacciSequence = [0,1]
    for(let i = 0; i < number-1; i++){
        fibonacciSequence.push(fibonacciSequence[i] + fibonacciSequence[i+1])
    }

    return fibonacciSequence[number]
};

// Do not edit below this line
module.exports = fibonacci;

