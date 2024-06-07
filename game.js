let actualShift;

function shiftAndDisplay() {
    const inputWord = document.getElementById("inputWord").value;
    actualShift = Math.floor(Math.random() * 26) + 1;  //Random shift from 1 to 26
    const encryptedWord = cipherChallenge(inputWord, actualShift);
    document.getElementById("encryptedWord").innerText = encryptedWord;
}

function cipherChallenge(str, shift) {
    return str.toUpperCase().split('').map(char => {
        let code = char.charCodeAt(0);
        if (code >= 65 && code <= 90) {  //ASCII range for uppercase letters
            return String.fromCharCode(((code - 65 + shift) % 26) + 65);
        }
        return char;
    }).join('');
}

function check_guess() {
    const guess = parseInt(document.getElementById("guessShift").value);
    const result = document.getElementById("resultText");
    if (guess === actualShift) {
        result.innerText = "Yesss! you broke the code, good job!!";
    } else {
        result.innerText = "Oops, try again!";
    }
}
