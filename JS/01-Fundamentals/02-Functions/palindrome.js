function palindrome(input) {
    function checkFlag(num) {
        const str = num.toString();
        let flag = false;
    
        for (let i = 0; i <= str.length / 2; i++) {
            const front = str[i];
            const back = str[str.length - 1 - i];
            if (front == back) flag = true;
            else flag = false;
            if (flag == false) break;   
        }
    
        console.log(flag) ;
    }

    for (let j = 0; j < input.length; j++) {
        const element = input[j];
        checkFlag(element);
    }
}
palindrome([321223]);