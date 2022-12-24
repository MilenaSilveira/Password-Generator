

const lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "Sz"];
const upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9,];
const specialChar = ["~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "=", "+", "-", "_", "/", ".", ",", "'", ";", ":", "[","]","{", "}", "?", "<", ">", "|",]

// Assignment Code
function getPasswordOption(){

  var addOptions = []
  var finalPassword = []
  var passwordLength = []

  var wantSpecial = confirm("Would you like to add Special Characters?")
  var wantLowerCased = confirm("Would you like to add Lower Case letters?")
  var wantUpperCased = confirm("Would you like to add Upper Case letters?")
  var wantNumbers = confirm("Would you like to add Numbers?")
  
}

if (wantSpecial) {
  addOptions = addOptions.concat(specialChar)

}
if (wantLowerCased) {
  addOptions = addOptions.concat(lowerCasedChar)

}
if (wantUpperCased) {
  addOptions = addOptions.concat(upperCasedChar)

}
if (wantNumbers) {
  addOptions = addOptions.concat(numericalChar)

}

if (wantSpecial == false && wantLowerCased == false && wantUpperCased == false && wantNumbers == false){
  alert ("You must choose one type of character for your password")
  getPasswordOption()
}
if (passwordLength >= 8 && passLength <= 128) {
    for(var i=0; i < passLength; i++) {
      randomPassword = Math.floor(Math.random() * addOptions.length);
      finalPassword += addOptions[randomPassword]
    }
}




