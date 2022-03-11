// Variables representing all the criteria necessary for generating a secure password
var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numberic = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
var specialChar = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+", ",", "<", ".", ">", "/", "?"];

// Variables representing if the user confirming if they do or do not want certain criteria in their password
var confirmLowercase;
var confirmUppercase;
var confirmNumeric;
var confirmSpecialChar;
var confirmLength;

// generate password beginning with asking the user what criteria they would like in their password

var generatePassword = function () {
  console.log(generatePassword);

  var confirmLength = parseInt(window.prompt("How long would you like your password to be? Please choose a length between 8 and 128 characters."));
    if (confirmLength <= 7 || confirmLength >= 129) {
      window.alert("You must choose a length between 8 and 128 characters. Please try again.");
      generatePassword();
    } 
  
      var confirmLowercase = window.confirm("Would you like lower case characters in your password?");
      var confirmUppercase = window.confirm("Would you like upper case characters in your password?");
      var confirmNumeric = window.confirm("Would you like numbers in your password?");
      var confirmSpecialChar = window.confirm("Would you like special characters in your password?"); 
      
      if (confirmLowercase = true) { // ??then add to for loop to generate the password??
        // insert more if statements to put action to the user selection of what criteria they would like for their password
        };
};

   // (while loop to be able to jump out if possible)need to add a loop that continues to ask this question until a correct number is selected. currently if the user chooses
    // a character length incorrectly more than once, it does not ask them to try again




// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
