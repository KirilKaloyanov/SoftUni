function pointsValidation(input) {
    const x1 = input[0];
    const y1 = input[1];
    const x2 = input[2];
    const y2 = input[3];

    let distanceBetweenPoints = Math.sqrt(Math.pow((x2 - x1), 2) + Math.pow((y2 - y1), 2));
    if (Number.isInteger(distanceBetweenPoints)) distanceBetweenPoints = 'valid';
    else distanceBetweenPoints = 'invalid';

    let point1To0 = Math.sqrt(Math.pow(x1, 2) + Math.pow(y1, 2)) ;
    if (Number.isInteger(point1To0)) point1To0 = 'valid';
    else point1To0 = 'invalid';

    let point2To0 = Math.sqrt(Math.pow(x2, 2) + Math.pow(y2, 2)) ;
    if (Number.isInteger(point2To0)) point2To0 = 'valid';
    else point2To0 = 'invalid';
    
    console.log(`{${x1}, ${y1}} to {0, 0} is ${point1To0}`);
    console.log(`{${x2}, ${y2}} to {0, 0} is ${point2To0}`);
    console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is ${distanceBetweenPoints}`);
}

pointsValidation([3, 0, 0, 4]);
pointsValidation([2, 1, 1, 1]);