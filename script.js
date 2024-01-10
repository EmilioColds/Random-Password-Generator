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

function passwordGenerator() {

    const length = window.prompt("Please select a length for your password. It has to be between 8 - 128 characters.")

    if (length <8 || length > 128) {
        window.alert ("The length of your password NEEDS to be between 8 and 128 characters.");
        return; 
    }

}

passwordGenerator();