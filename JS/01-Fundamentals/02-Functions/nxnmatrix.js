function nxnmatrix(input) {
    for (let i = 0; i < input; i++) {
        let str = input.toString();
        for (let j = 0; j < input - 1; j++) {
            str += ` ${input}`;
        }
        console.log(str);
    }
}

nxnmatrix(7);