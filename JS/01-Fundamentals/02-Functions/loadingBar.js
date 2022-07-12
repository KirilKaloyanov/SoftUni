function loadingBar(input){
    if (input == 100) {
        console.log('100% Complete!');
        console.log('[%%%%%%%%%%]');
    } else {
        let str = `${input}% [`;
        for (let i = 0; i < 10; i++) {
            if (i < input / 10) str += '%';
            else str += '.'
        }
        str += ']';
        console.log(str);
        console.log('Still loading...');
    }
}

loadingBar(20);