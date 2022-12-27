
var generateBtn = document.querySelector("#generate");

const lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "Sz"];
const upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9,];
const specialChar = ["~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "=", "+", "-", "_", "/", ".", ",", "'", ";", ":", "[","]","{", "}", "?", "<", ">", "|",]

// Assignment Code
function generatePassword(){

  var addOptions = []
  var finalPassword = ""
  var passwordLength = prompt ("How long would you like your password to be? ")

  if (passwordLength <= 8 && passwordLength >= 128) {
  
     alert ("Please create a password with a length between 8 and 128 characters. ")
     generatePassword();
     
    }

else{
  var wantSpecial = confirm("Would you like to add Special Characters?")
  var wantLowerCased = confirm("Would you like to add Lower Case letters?")
  var wantUpperCased = confirm("Would you like to add Upper Case letters?")
  var wantNumbers = confirm("Would you like to add Numbers?")
  


if (wantSpecial) {
  addOptions = addOptions.concat(specialChar)

}
if (wantLowerCased) {
  addOptions = addOptions.concat(lowerCase)

}
if (wantUpperCased) {
  addOptions = addOptions.concat(upperCase)

}
if (wantNumbers) {
  addOptions = addOptions.concat(numbers)

}

if (wantSpecial == false && wantLowerCased == false && wantUpperCased == false && wantNumbers == false){
  alert ("You must choose one type of character for your password")
  generatePassword()
}
if (passwordLength >= 8 && passwordLength <= 128) {
    for(var i=0; i < passwordLength; i++) {
      randomPassword = Math.floor(Math.random() * addOptions.length);
      finalPassword += addOptions[randomPassword]
    }
} 

}
document.getElementById("password").innerHTML = finalPassword

}
//Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


// Add event listener to generate button
generateBtn.addEventListener("click", generatePassword);