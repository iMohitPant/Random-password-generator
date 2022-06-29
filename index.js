const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let generateBtn = document.getElementById("generate-btn")
let pass1 = document.getElementById("pass-1")
let pass2 = document.getElementById("pass-2")


generateBtn.addEventListener("click" , function() {
    // document.body.style.backgroundColor = "red"
    let pass = ["", ""]

    for(let j=0; j<2; j++)
    for(let i=0; i<15; i++) {
        let randomIndex = Math.floor(Math.random()*characters.length)
        pass[j] += characters[randomIndex]
    }

    pass1.textContent = pass[0]
    pass2.textContent = pass[1]   
    
    

})

pass1.addEventListener("click", function(){copyToClipBoard(pass1.textContent)})
pass2.addEventListener("click", function(){copyToClipBoard(pass2.textContent)})

function copyToClipBoard(password) {
    navigator.clipboard.writeText(password)
    alert("Copied the text: " + password);
}
