let output1 = document.getElementById("outputOne");
let output2 = document.getElementById("outputTwo");
let numEl = document.getElementById("num-el");
let symEl = document.getElementById("sym-el");
let passLenEl = document.getElementById("passLen-el");

let passLenght = 15;

const letters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const symbols = ["~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"];

function updateArea() {
    passLenEl.textContent = passLenght;
}

updateArea();

function addOne() {
    if (passLenght === 15) {
        passLenght = 15;    
    } else {
        passLenght += 1;
    }
    updateArea();
}

function delOne() {
    if (passLenght === 1) {
        passLenght = 1;    
    } else {
        passLenght -= 1;
    }
    updateArea();
}

function getPassSize() {
    let passSize = passLenght;
    return passSize;
}

function checkNumbers() {
    let hasNumbers;
    if (numEl.checked) {
        hasNumbers = true;
    } else {
        hasNumbers = false;
    }

    return hasNumbers;
}

function checkSymbols() {
    let hasSymbols;
    if (symEl.checked) {
        hasSymbols = true;
    } else {
        hasSymbols = false;
    }

    return hasSymbols;
}

function genLetters() {
    let index = Math.floor(Math.random() * letters.length);
    let randomLetter = letters[index];
    return randomLetter;
}

function genNumbers() {
    let index = Math.floor(Math.random() * numbers.length);
    let randomNumber = numbers[index];
    return randomNumber;
}

function genSymbols() {
    let index = Math.floor(Math.random() * symbols.length);
    let randomSymbol = symbols[index];
    return randomSymbol;
}

function getOptions() {
    let option = Math.floor(Math.random() * 3) + 1;
    return option;
}

function genPasswordOne() {
    let size = getPassSize();
    let hasNumbers = checkNumbers();
    let hasSymbols = checkSymbols();

    let passwordOne = "";
    for (let i = 0; i < size; i++) {
        let valid = false;
        do {
            let option = getOptions();
            if (option === 1) {
                passwordOne += genLetters();
                valid = true;
            }

            if (option === 2 && hasNumbers) {
                passwordOne += genNumbers();
                valid = true;
            } else if (option === 2 && !hasNumbers) {
                valid = false;
            }

            if (option === 3 && hasSymbols) {
                passwordOne += genSymbols();
                valid = true;
            } else if (option === 3 && !hasSymbols) {
                valid = false;
            }
        } while (valid != true);
    }
    return passwordOne;
}

function genPasswordTwo() {
    let size = getPassSize();
    let hasNumbers = checkNumbers();
    let hasSymbols = checkSymbols();

    let passwordTwo = "";
    for (let i = 0; i < size; i++) {
        let valid = false;
        do {
            let option = getOptions();
            if (option === 1) {
                passwordTwo += genLetters();
                valid = true;
            }

            if (option === 2 && hasNumbers) {
                passwordTwo += genNumbers();
                valid = true;
            } else if (option === 2 && !hasNumbers) {
                valid = false;
            }

            if (option === 3 && hasSymbols) {
                passwordTwo += genSymbols();
                valid = true;
            } else if (option === 3 && !hasSymbols) {
                valid = false;
            }
        } while (valid != true);
    }
    return passwordTwo;
}

function genPasswords() {
    output1.textContent = genPasswordOne();
    output2.textContent = genPasswordTwo();
}