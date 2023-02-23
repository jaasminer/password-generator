const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let passOne = document.getElementById("pass-one")
let passTwo = document.getElementById("pass-two")

function generatePass() {
    randomPass()
}

function randomPass() {
    let tempPass1 = ""
    let tempPass2 = ""
    for (let i = 0; i < 15; i++) {
        let thePassOne = Math.floor(Math.random()*characters.length)
        tempPass1 += characters[thePassOne]
        let thePassTwo = Math.floor(Math.random()*characters.length)
        tempPass2 += characters[thePassTwo]
    }
    passOne.textContent = tempPass1
    passTwo.textContent = tempPass2
}



