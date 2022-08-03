function numberModification(input) {

    function reduced(num) {
        let str = num.toString();
        let reduced = str.split('').reduce(((x, y) => Number(x) + Number(y)), 0);
        return reduced / str.length;
    }
    while (reduced(input) <= 5){
        input = input * 10 + 9;
    };
    console.log(input);
}

numberModification(101)