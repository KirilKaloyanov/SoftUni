function charsInRange(char1, char2) {
    let chars = [];
    
    function generateCharSequence(firstChar, secondChar) {
        let asciiCode1 = firstChar.charCodeAt(0);
        let asciiCode2 = secondChar.charCodeAt(0);
        for (let i = asciiCode1 + 1; i <= asciiCode2 - 1; i++) {
            chars.push(String.fromCharCode(i))
        }
    }
    
    if (char1.charCodeAt(0) < char2.charCodeAt(0)) generateCharSequence(char1, char2);
    else generateCharSequence(char2, char1);

    console.log(chars.join(' '));
}

charsInRange('C', '#');