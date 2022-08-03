function carWash(input) {
    let cleanIndex = 0;

    for (let i = 0; i < input.length; i++) {
        const element = input[i];
        if (element == 'soap') {
            cleanIndex += 10;
        } else if (element == 'water') {
            cleanIndex = cleanIndex + 0.2*cleanIndex;
        } else if (element == 'vacuum cleaner') {
            cleanIndex = cleanIndex + 0.25*cleanIndex;
        } else {
            cleanIndex = cleanIndex - 0.1*cleanIndex;
        }
    }

    console.log(`The car is ${cleanIndex.toFixed(2)}% clean.`)
}

carWash(["soap", "water", "mud", "mud", "water", "mud", "vacuum cleaner"])