function perfectNumber(input) {
    if (input % 2 != 0) {
        console.log("It's not so perfect.");
        return;
    }

    let divisors = [];

    for (let i = 0; i <= input/2; i++) {
        if (Number.isInteger(input / i))
        divisors.push(i);
    }

    const reduced = divisors.reduce((x, y) => (x + y), 0)

    if (reduced == input) console.log( "We have a perfect number!");
    else console.log("It's not so perfect.");
}

perfectNumber(6);