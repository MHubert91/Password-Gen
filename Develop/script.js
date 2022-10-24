// Assignment Code
var generateBtn = document.querySelector("#generate");

function randomInt(min, max){
  if (!max) {
    max = min
    min = 0
  }
  var rand = Math.random()
    return Math.floor(min*(1 - rand) + rand*max)
}
  function getRandomItem(list){
    return list [randomInt(0, list.length)]
  }


function generatePassword() {
  var userInput = window.prompt (" Password should be between 8-128 charters")
  var passwordLength = parseInt(userInput)

  if (isNaN(passwordLength)) {
    window.alert("This is not a number!!")
    return  
} 

 if(passwordLength < 8 || passwordLength > 128) {
   window.alert("password must bet between 8-128 charters")
   return
 }

 var userNumbers = window.confirm("Would you like numbers?")
 var lowerCaseLetters = window.confirm("Would you like lowercase letters?")
 var uppercaseLetters = window.confirm("Would you like uppercase letters?")
 var specialSymbols = window.confirm("Would you like special symbols?")

 var numberList = ["0", "1", "2", "3", "4", "5", "6", "7", "8","9"]
 var symbolsList = ["!", "@", "#", "$", "%", "&", "*", "?", "-", "+", "="]
 var lowercaseList = ["a", "b", "c", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
 var uppercaseList = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]

 var optionsCart = []



 if (userNumbers === true){
    optionsCart.push(numberList)
 }

 if (specialSymbols === true){
  optionsCart.push(symbolsList)
}

if (lowerCaseLetters === true){
  optionsCart.push(lowercaseList)
}

if (uppercaseLetters === true){
  optionsCart.push(uppercaseList)
}

if (optionsCart.length === 0){
  optionsCart.push(numberList)
}
 
var generatedPassword = ""

for (var i = 0; i < passwordLength; i++){
  var randomItem = getRandomItem(optionsCart)
  var randomCharacter = getRandomItem(randomItem)
  generatedPassword += randomCharacter
}
return generatedPassword

}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);