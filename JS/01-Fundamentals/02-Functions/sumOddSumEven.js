function sumOddSumEven(num) {
    const str = num.toString();

let odd = 0;
let even = 0;

    for (let i = 0; i < str.length; i++) {
        const element = str[i];
        if (element % 2 == 0) even += Number(element);
        else odd += Number(element); 
    }

    console.log(`Odd sum = ${odd}, Even sum = ${even}`)
}

sumOddSumEven(3495892137259234);