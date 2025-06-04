let output1 = document.getElementById("outputOne");
let output2 = document.getElementById("outputTwo");

const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"];

function generatePassword() {
    
    let passOne = "";
    for (let i = 1; i <= 15; i++) {
        passOne += characters[Math.floor(Math.random() * characters.length)];
    }
    output1.textContent = passOne;
    
    let passTwo = "";
    for (let i = 1; i <= 15; i++) {
        passTwo += characters[Math.floor(Math.random() * characters.length)];
    }
    output2.textContent = passTwo;
}