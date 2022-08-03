function radioCrystals(input) {
    const targetThickness = input.shift();

    for (let i = 0; i < input.length; i++) {
        console.log(`Processing chunk ${input[i]} microns`); // input[0]

        let cuts = 0;
        while (input[i] >= targetThickness * 4) {
            input[i] /= 4;
            cuts++;
        }
        input[i] = Math.floor(input[i]); // missing
        if (cuts != 0) {
            console.log(`Cut x${cuts}`);
            console.log('Transporting and washing');
        }

        let laps = 0;
        while (input[i] * 0.8 >= targetThickness) {
            input[i] *= 0.8;
            laps++;
        }
        input[i] = Math.floor(input[i]);
        if (laps != 0) {
            console.log(`Lap x${laps}`);
            console.log('Transporting and washing');
        }

        let grind = 0;
        while (input[i] - 20 >= targetThickness) {
            input[i] -= 20;
            grind++;
        }
        input[i] = Math.floor(input[i]);
        if (grind != 0) {
            console.log(`Grind x${grind}`);
            console.log('Transporting and washing');
        }

        let etch = 0;
        while (input[i] - 2 >= targetThickness) {
            input[i] -= 2;
            etch++;
        }

        if (input[i] == targetThickness) {
            input[i] = Math.floor(input[i]);
            if (etch != 0) {
                console.log(`Etch x${etch}`);
                console.log('Transporting and washing');
            }
        } else {
            input[i] -= 1;
            etch++;
            
            console.log(`Etch x${etch}`);
            console.log('Transporting and washing');
            console.log(`X-ray x1`);
        }


        console.log(`Finished crystal ${input[i]} microns`);
    }
}

radioCrystals([1375, 50000]);


        // if (input[i] % 2 == 0) {
        //     let etch = 0;
        //     while (input[i] - 2 >= targetThickness - 1) {
        //         input[i] -= 2;
        //         etch++;
        //     }
        //     input[i] = Math.floor(input[i]);
        //     if (etch != 0) {
        //         console.log(`Etch x${etch}`);
        //         console.log('Transporting and washing');
        //     }
        //     input[i] += 1;
        //     console.log(`X-ray x1`);

        // } else {
        //     let etch = 0;
        //     while (input[i] - 2 >= targetThickness) {
        //         input[i] -= 2;
        //         etch++;
        //     }
        //     input[i] = Math.floor(input[i]);
        //     if (etch != 0) {
        //         console.log(`Etch x${etch}`);
        //         console.log('Transporting and washing');
        //     }
        // }