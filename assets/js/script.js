// Assignment code here

// CREATE VARIALBE FOR EACH PASSWORD CRITERIA (LOWERCASE, UPPERCASE, NUMERIC, SPECIAL)
var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numberic = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
var specialChar = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+", ",", "<", ".", ">", "/", "?"];

var confirmLowercase;
var confirmUppercase;
var confirmNumeric;
var confirmSpecialChar;
var confirmLength;

function generatePassword() {
  var confirmLowercase = window.confirm("Would you like lower case characters in your password?");
  var confirmUppercase = window.confirm("Would you like upper case characters in your password?");
  var confirmNumeric = window.confirm("Would you like numbers in your password?");
  var confirmSpecialChar = window.confirm("Would you like special characters in your password?");

  var confirmLength = window.prompt("How long would you like your password? You must choose a number between 8 and 128.")
    if(confirmLength <= 7 || confirmLength >= 129) {
      alert("You must choose a length between 8 and 128. Please try again.");
    }
    
}
  



// CREATE IF STATEMENTS
  // IF USER SELECTS CANCEL(FALSE), THE VARIABLE IS NOT CALLED IN THE PASSWORD GENERATE FUNCTION
  // IF USER SELECTS OK(TRUE), THE VARIABLE IS CALLED INTO THE PASSWORD GENERATE FUNCTION
  // THIS HAPPENS ON A LOOP UNTIL ALL 4 QUESTIONS ARE ANSWERED, THEN LOOP BREAKS

// CREATE A VARIABLE THAT ASKS THE USER HOW MANY CHARACTERS THEY WANT IN THEIR PASSWORD USING WINDOW.PROMPT
  // THE ANSWER IS CALLED INTO A FUNCTION THAT GENERATES THE PASSWORD

// CREATE A FUNCTION THAT GENERATES THE PASSWORD


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






// REMEMBER THE DECK OF CARDS PRACTICE FOR BREAKING DOWN CODE

// CREATE ISSUES IN GITHUB FOR STEP BY STEP OF EACH STEP I'LL TAKE IN CREATING THIS JS CODE

// 1) when button is clicked, ask user what citeria they require for their password
  //create prompts to ask the user what criteria they would like for their password
  //create objects for citeria 

// 2) ask user what their required length is between 8 - 128 characters
  //create prompt that asks the use how many character they would like their password to be

// 3) when critera is given, generate random password using specific criteria
  //add randomization into the selected criteria
  //cut the password back to the desired length requested from user

// 4) generate code and present it in the webpage