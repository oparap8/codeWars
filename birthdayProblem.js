function factorial(n) {
    let result = 1;
    for (let i = 1; i <= n; i++) {
        result *= i;
    }
    return result;
}

function calculateProbability(x) {
    const factorial365 = factorial(365);
    const factorial365minusX = factorial(365 - x);
    const totalWays = 365 ** x;

    return 1 - ((factorial365 / factorial365minusX) / totalWays);
}


console.log(calculateProbability(5))