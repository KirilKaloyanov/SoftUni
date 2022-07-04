function smallestNumber(num1, num2, num3) {
    let smallest = 0;
    if (num1 < num2) smallest = num1;
    else smallest = num2;
    if (smallest > num3) smallest = num3;
    console.log(smallest);
}

smallestNumber(600, 342, 123);