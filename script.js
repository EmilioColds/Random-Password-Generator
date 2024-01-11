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

// The function will generate the password and link it to the variable "password".
function generatePassword() {

    // Given a password length by the user, its value will be given to the constant passwordLength.
    const passwordLength = window.prompt("Please select a length for your password. It has to be between 8 - 128 characters.")

    // Determined the conditional for the correct length of passwordLength.
    if (passwordLength < 8 || passwordLength >= 129) {
        window.alert ("The length of your password NEEDS to be between 8 and 128 characters. Try again.");
        generatePassword();
        return; 
    }

    // Created the constants for the confirmations of type of characters that will be used to create de password.
    const lowercaseCharact = confirm("Would you like your password to include LOWERCASE characters?")
    const uppercaseCharact = confirm("Would you like your password to include UPPERCASE characters?")
    const numberCharact = confirm("Would you like your password to include NUMBERS?")
    const specialCharact = confirm("Would you like your password to include SPECIAL characters?")

    // Determine the conditional for a well written password. The password will need at least one type of characters to be created.
    if (!lowercaseCharact && !uppercaseCharact && !numberCharact && !specialCharact){
        window.alert ("You NEED to apply at least ONE type of characters to your password. Try again.");
        generatePassword();
        return;
    }

    // Added the characters that will be used for each type, creating a bank of "values" for the constants.
    let characters = '';
    const lowercaseList = "abcdefghijklmnopqrstuvwxyz";
    const uppercaseList = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numberList = "0123456789";
    const specialList = "!@#$%^&*().,;:-_[]";

    // Conditional to give the right characters to the "characters" constant that will be used to create the password. Only add the characters that the user chose.
    if (lowercaseCharact) characters += lowercaseList;
    if (uppercaseCharact) characters += uppercaseList;
    if (numberCharact) characters += numberList;
    if (specialCharact) characters += specialList;

    // Logic for a randomly generated password with a "for". It will choose different characters depending on the values of the passwordLength and the characters chosen by the user.
    let password = '';
    for (let i = 0; i < passwordLength; i++) {
        const randomPassword = Math.floor(Math.random() * characters.length);
        password += characters[randomPassword];
    }

    return password;
}