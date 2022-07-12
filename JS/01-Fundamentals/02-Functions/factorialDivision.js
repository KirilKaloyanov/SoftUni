function factorialDivision(input1, input2) {
    function factorial(input) {
        let result = 1;
        for (let i = 1; i <= input; i++) {
            result *= i;
        }
        return result;
    }

    const result1 = factorial(input1);
    const result2 = factorial(input2);

    console.log((result1/result2).toFixed(2));
}

factorialDivision(5, 2);