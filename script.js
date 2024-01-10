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

function generatePassword() {

    const passwordLength = window.prompt("Please select a length for your password. It has to be between 8 - 128 characters.")

    if (passwordLength < 8 || passwordLength >= 129) {
        window.alert ("The length of your password NEEDS to be between 8 and 128 characters. Try again.");
        generatePassword();
        return; 
    }

    const lowercaseCharact = confirm("Would you like your password to include LOWERCASE characters?")
    const uppercaseCharact = confirm("Would you like your password to include UPPERCASE characters?")
    const numberCharact = confirm("Would you like your password to include NUMBERS?")
    const specialCharact = confirm("Would you like your password to include SPECIAL characters?")

    if (!lowercaseCharact && !uppercaseCharact && !numberCharact && !specialCharact){
        window.alert ("You NEED to apply at least ONE type of characters to your password. Try again.");
        generatePassword();
        return;
    }

    let characters = '';
    const lowercaseList = "abcdefghijklmnopqrstuvwxyz";
    const uppercaseList = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numberList = "0123456789";
    const specialList = "!@#$%^&*().,;:-_[]";

    if (lowercaseCharact) characters += lowercaseList;
    if (uppercaseCharact) characters += uppercaseList;
    if (numberCharact) characters += numberList;
    if (specialCharact) characters += specialList;

    let password = '';
    for (let i = 0; i < passwordLength; i++) {
        const randomPassword = Math.floor(Math.random() * characters.length);
        password += characters[randomPassword];
    }

    return password;
}