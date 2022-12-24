

const lowerCase = ["a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z"];
const upperCase = ["A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X, Y, Z"];
const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9,];
const specialChar = ["~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "=", "+", "-", "_", "/", ".", ",", "'", ";", ":", "[","]","{", "}", "?", "<", ">", "|",]

// Assignment Code

var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Generating Passward//

if (usersChoice1 = "y"){
     var index = Math.floor(Math.random() * lowerCase.length);
     var usersChoice1 = lowerCase[index];
     console.log(index);
   
   return (usersChoice1);
   }



// Promt to ask user what character options they want to include.//

function specialCharQuestion() {

  var wantChar = confirm("Would you like to add Special Characters?")
  console.log(wantChar)

  if (wantChar){
    alert("You chosse to include Special Characters");
  }else{
    alert("You chose not to include special Characters");

  }
  return wantChar;
}

function lowerCaseQuestion() {

  var wantLowerChar = confirm("Would you like to add Lower Case Characters?")
  console.log(wantLowerChar)

  if (wantLowerChar){
    alert("You chosse to include Lower Case Characters");
  }else{
    alert("You chose not to include Lower Case Characters");

  }
  return wantLowerChar;
}

function upperCaseQuestion() {

  var wantUpperChar = confirm("Would you like to add Upper Case Characters?")
  console.log(wantUpperChar)

  if (wantUpperChar){
    alert("You chose to include Upper Case Characters");
  }else{
    alert("You chose not to include Upper Case Characters");

  }
  return wantUpperChar;
}

function numQuestion() {

  var wantNumChar = confirm("Would you like to add Numbers?")
  console.log(wantNumChar)

  if (wantNumChar){
    alert("You chose to include Number Characters");
  }else{
    alert("You chose not to include Number Characters");

  }
  return wantChar;
}


//Verification
specialCharQuestion()
upperCaseQuestion()
upperCaseQuestion()
numQuestion
// if (usersChoice1 = "y"){
//   var index = Math.floor(Math.random() * lowerCase.length);
//   var usersChoice1 = lowerCase[index];
//   console.log(index);
// }
// return (usersChoice1);
// }
generatePassword();



