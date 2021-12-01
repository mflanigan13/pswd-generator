// Assignment code here
var specialChar = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", " < ", "=", " > ", " ? ", "@", "[", "]", " ^ ", "_", "`", "{", "|", "}", "~"];
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numberChar = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

//  Prompt instruction for the user to begin
window.onload = alert("Welcome! Please click 'Generate password' to start!");

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

function generatePassword() {
  var options = getCharacterTypes();
  var result = [];
  var possibleCharacters = [];
  var guaranteedCharacters = [];

  if (options.hasSpecialChar) {
    possibleCharacters = possibleCharacters.concat(specialChar);
    guaranteedCharacters.push(getRandom(specialChar));
  }

  if (options.hasLowerCase) {
    possibleCharacters = possibleCharacters.concat(lowerCase);
    guaranteedCharacters.push(getRandom(lowerCase));
  }

  if (options.hasUpperCase) {
    possibleCharacters = possibleCharacters.concat(upperCase);
    guaranteedCharacters.push(getRandom(upperCase));
  }

  if (options.hasNumbers) {
    possibleCharacters = possibleCharacters.concat(numberChar);
    guaranteedCharacters.push(getRandom(numberChar));
  }

  for (let i = 0; i < options.length; i++) {
    const possibleCharacter = getRandom(possibleCharacters);
    result.push(possibleCharacter);
  }

  for (let i = 0; i < guaranteedCharacters.length; i++) {
    result[i] = guaranteedCharacters[i];
  }

  return result.join("");
};



function getRandom(arr) {
  var randomIndex = Math.floor(Math.random() * arr.length);
  var randomCharacter = arr[randomIndex];
  return randomCharacter;
};

function getCharacterTypes() {
  var length = parseInt(prompt("How long would you like your password to be?"));
  if (isNaN(length)) {
    alert("Please use numbers only.")
  }

  while (length < 8 || length > 128) {
    alert("Please use only numbers 8-28. Please click the generate button again.")
    length = parseInt(prompt("How long would you like your password to be?"));
  }

  var hasSpecialChar = confirm("Click ok to include special characters");
  var hasLowerCase = confirm("Click ok to include lower case letters");
  var hasUpperCase = confirm("CLick ok to include upper case letters");
  var hasNumbers = confirm("Click ok to include numbers");

  if (
    hasSpecialChar === false &&
    hasLowerCase === false &&
    hasUpperCase === false &&
    hasNumbers === false
  ) {
    alert("You must use at least one character type.");
  }

  var characterOptions = {
    length,
    hasSpecialChar,
    hasLowerCase,
    hasUpperCase,
    hasNumbers
  };
  return characterOptions
};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


