function passwordValidation(input) {
    let passLength = false;

    if (input.length > 5 && input.length < 11) passLength = true;
    else console.log('Password must be between 6 and 10 characters');

    let passSymbols = true;

    for (let i = 0; i < input.length; i++) {
        const element = input.charCodeAt(i);
        if (
            (element > 47 && element < 58) ||
            (element > 64 && element < 91) ||
            (element > 96 && element < 123)
        ) continue;
        else {
            passSymbols = false;
            console.log("Password must consist only of letters and digits");
            break;
        }
    }

    let passDigits = [];

    for (let i = 0; i < input.length; i++) {
        const element = input.charCodeAt(i);
        if (element > 47 && element < 58) passDigits.push(element);
    }

    if (passDigits.length < 2)
        console.log('Password must have at least 2 digits')

    if ((passDigits.length > 1) && passLength == true && passSymbols == true) console.log('Password is valid');

}

passwordValidation('asdf2');