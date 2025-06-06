let output = [
    document.getElementById("outputOne"),
    document.getElementById("outputTwo")
];
let numEl = document.getElementById("num-el");
let symEl = document.getElementById("sym-el");
let passLenEl = document.getElementById("passLen-el");
let themeBtn = document.getElementById("theme-btn");
let pageTheme = document.getElementById("body");
let theme = "light";

let passwordSettings = {
    length: 15, // Selected Password Length
    min: 1,     // Minimum Password Length
    max: 15     // Maximum Password Length
};

const letters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
const symbols = ["~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"];

function updateArea() {
    passLenEl.textContent = passwordSettings.length;
}

updateArea();

function changeTheme() {
    if(theme === "light") {
        pageTheme.classList.remove("light");
        pageTheme.classList.add("dark");
        themeBtn.textContent = "Light Mode ☀️";
        theme = "dark";
    } else if (theme === "dark") {
        pageTheme.classList.remove("dark");
        pageTheme.classList.add("light");
        themeBtn.textContent = "Dark Mode 🌙";
        theme = "light";
    }
}

function change(changeType) {
    passwordSettings.length += changeType;

    if (passwordSettings.length <= passwordSettings.min) {
        passwordSettings.length = passwordSettings.min;
    }

    if (passwordSettings.length >= passwordSettings.max) {
        passwordSettings.length = passwordSettings.max;    
    }

    updateArea();
}

function copyPass(num) {
    navigator.clipboard.writeText(output[num].textContent);
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
    return Math.floor(Math.random() * 10).toString();
}

function genSymbols() {
    let index = Math.floor(Math.random() * symbols.length);
    let randomSymbol = symbols[index];
    return randomSymbol;
}

function getOptions() {
    return Math.floor(Math.random() * 3) + 1;
}

function genPassword() {
    let size = passwordSettings.length;
    let hasNumbers = checkNumbers();
    let hasSymbols = checkSymbols();

    let password = "";
    for (let i = 0; i < size; i++) {
        let valid = false;
        do {
            let option = getOptions();
            if (option === 1) {
                password += genLetters();
                valid = true;
            }

            if (option === 2 && hasNumbers) {
                password += genNumbers();
                valid = true;
            } else if (option === 2 && !hasNumbers) {
                valid = false;
            }

            if (option === 3 && hasSymbols) {
                password += genSymbols();
                valid = true;
            } else if (option === 3 && !hasSymbols) {
                valid = false;
            }
        } while (valid != true);
    }
    return password;
}

function genPasswords() {
    for(let i = 0; i < output.length; i++) {
        output[i].textContent = genPassword();
    }
}