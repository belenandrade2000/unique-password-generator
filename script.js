// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
var specialCharac = [" ", "!", '"', "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\\", "^", "_", "`", "{", "|", "}", "~", "]"]
var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];

var lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

var upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L',
  'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X',
  'Y', 'Z']


function generatePassword() {
  var charactersLength = prompt("How many characters would you like your password to contain?");
  if (charactersLength < 8) {
    ;
    alert("Password length must be at least 8 characters. Please input again")
    characters(); // not letting me input again
  } else if (charactersLength > 128) {
    ;
    alert("Password length must not exceed 128 characters. Please input again")
    characters();
  } else if (!charactersLength) {
    alert("Invalid input. Please provide a number 8-128.")
  } else {
    ;
    var confirmSpecial = confirm("Click OK to confirm including special characters");
    var confirmNum = confirm("Click OK to confirm including numeric characters");
    var confirmLowerCase = confirm("Click OK to confirm including lowercase characters");
    var confirmUpper = confirm("Click OK to confirm including uppercase characters");
};

  // Selecting all arrays
  if (confirmSpecial && confirmNum && confirmLowerCase && confirmUpper) {
    var userSelection = specialCharac.concat(numbers, lowerCase, upperCase);

// Selecting 3 arrays
  } else if (!confirmSpecial && confirmNum && confirmLowerCase && confirmUpper) {
    var userSelection = numbers.concat(lowerCase, upperCase);
  } else if (confirmSpecial && !confirmNum && confirmLowerCase && confirmUpper) {
    var userSelection = specialCharac.concat(lowerCase, upperCase);
  } else if (confirmSpecial && confirmNum && !confirmLowerCase && confirmUpper) {
    var userSelection = specialCharac.concat(numbers, upperCase);
  } else if (confirmSpecial && confirmNum && confirmLowerCase && !confirmUpper) {
    var userSelection = specialCharac.concat(numbers, lowerCase);
  }

  // Selecting 2 arrays
  else if (confirmSpecial && confirmNum){
  var userSelection = specialCharac.concat(numbers);
  }
  else if (confirmSpecial && confirmLowerCase){
  var userSelection = specialCharac.concat(lowerCase);
  }
  else if (confirmSpecial && confirmUpper){
  var userSelection = specialCharac.concat(upperCase);
  }
  else if (confirmNum && confirmLowerCase){
  var userSelection = numbers.concat(lowerCase);
  }
  else if (confirmNum && confirmUpper){
  var userSelection = numbers.concat(upperCase);
  }
  else if (confirmLowerCase && confirmUpper){
  var userSelection = lowerCase.concat(upperCase);
  }

   // Selecting 1 array
  else if (confirmSpecial) {
  var userSelection = specialCharac;
  }else if (confirmNum){
  var userSelection = numbers;
  }else if (confirmLowerCase){
  var userSelection = lowerCase;
  }else if (confirmUpper){
  var userSelection = upperCase;
  }

  //Selecting 0 array
  else {
    alert("You must choose at least 1 criteria. Please try again")
  }


// generate password
emptyPassword ;
for (var i = 0; i < charactersLength; i++) {
  var alluserSelection = userSelection[Math.floor(Math.random() * userSelection.length)];
  emptyPassword.push(alluserSelection);

  

    return variable
  }



  // Add event listener to generate button
  generateBtn.addEventListener("click", writePassword);
