// Variables representing all the criteria necessary for generating a secure password
var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numeric = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
var specialChar = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+", ",", "<", ".", ">", "/", "?"];

// Variables representing if the user confirming if they do or do not want certain criteria in their password
var confirmLowercase = confirmLength;
var confirmUppercase = confirmUppercase;
var confirmNumeric = confirmNumeric;
var confirmSpecialChar = confirmSpecialChar;
var confirmLength = confirmLength;

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

var generatePassword = function () {
  console.log(generatePassword);

  // Beginning of prompts
  window.alert("Please answer the following questions to generate your password!");

  var confirmLength = parseInt(window.prompt("How long would you like your password to be? Please choose a length between 8 and 128 characters."));
  // ?? Why doesn't confirmLength "" and "null" not work right now?
  // length confirmation
  if (confirmLength <= 7 || confirmLength >= 129 || confirmLength == "" || confirmLength == "null") {
      window.alert("You must choose a length between 8 and 128 characters. Please try again.");
      generatePassword();
    }
  
  window.confirm("Your password will be " + confirmLength + " characters long.");
  confirmLength = parseInt(confirmLength);

  // Confirming criteria with the user
  var confirmLowercase = window.confirm("Would you like 'lower case' characters in your password?");
    if (confirmLowercase) {
      window.alert("Your password will have 'lower case' characters in it");
    } else {
      window.alert("Your password will not have 'lower case' characters in it");
    }
  var confirmUppercase = window.confirm("Would you 'like upper' case characters in your password?");
    if (confirmUppercase) {
      window.alert("Your password will have 'upper case' characters in it");
    } else {
      window.alert("Your password will not have 'upper case' characters in it");
    }
  var confirmNumeric = window.confirm("Would you like 'numbers' in your password?");
    if (confirmNumeric) {
      window.alert("Your password will have 'numbers' in it");
    } else {
      window.alert("Your password will not have 'numbers' in it");
    }
  var confirmSpecialChar = window.confirm("Would you like 'special characters' in your password?"); 
    if (confirmSpecialChar) {
      window.alert("Your password will have 'special characters' in it");
    } else {
        window.alert("Your password will not have 'special characters' in it");
      }
    
    // If all criteria is not chosen(false), alert the user they must choose at least one seleciton
    while ( (confirmLowercase === false) && (confirmUppercase === false) && (confirmNumeric === false) && (confirmSpecialChar === false) ) {
      window.alert("You must select at least one of the password criteria. Please try again.");
      generatePassword();
    }

  // any user promts that are ok(true) are added to this variable to create the password
  var passwordSelections = [];
  if (confirmLowercase) {
    passwordSelections += lowercase; 
  }
  if (confirmUppercase) {
    passwordSelections += uppercase;
  }
  if (confirmNumeric) {
    passwordSelections += numeric;
  }
  if (confirmSpecialChar) {
    passwordSelections += specialChar;
  }
  
  // for loop that outputs the password
  var finalPassword = "";
  for (var i = 0; i < passwordSelections; i++) {
    var userPassword = Math.floor(Math.random() * confirmLength.length);
    finalPassword += passwordSelections[userPassword];
  }
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
