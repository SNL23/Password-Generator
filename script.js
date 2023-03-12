// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
var lowercaseOptions = "abcdefghijklomnpqrstuvwxyz";
var uppercaseOptions = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numberic = "0123456789";
var specail = "!@#$%^&*.";

// Write password to the #password input
function writePassword() {
  var finalpassword = generatePassword();
  var passwordcontainer = document.querySelector("#password");

  passwordcontainer.textContent = finalpassword;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// WHEN I click the button to generate a password

// THEN I am presented with a series of prompts for password criteria


// THEN I select which criteria to include in the password
// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters
function options() {
  var passwordLength = prompt("How long would you like your password?");
  var optlowercase = confirm("Do you want a lowercase?");
  var optuppercase = confirm("Do you want a uppercase?");
  var optnumeric = confirm("Do you want a number?");
  var optspecial = confirm("Do you want a do special character?");
  var optpwdOptions = { passwordLength, optlowercase, optuppercase, optnumeric, optspecial }
  return optpwdOptions;
}
// WHEN asked for character types to include in the password
// THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters

// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected
function generatePassword() {
  var opt = options()
  console.log(opt);
  var password = ""
  if (opt.optlowercase) {
    password = password + getRandomValue(lowercaseOptions);
  } if (opt.optuppercase) {
    password = password + getRandomValue(uppercaseOptions);
  } if (opt.optnumeric) {
    password = password + getRandomValue(numberic);
  } if (opt.optspecial) {
    password = password + getRandomValue(specail);
  }
  // THEN a password is generated that matches the selected criteria
  for (var i = 0; i < opt.passwordLength; i++) {
    password = password += getRandomValue(lowercaseOptions);
  }
  console.log(password)
  return password;
}

// THEN the password is either displayed in an alert or written to the page 

function getRandomValue(str) {
  var randomIndex = Math.floor(Math.random() * str.length);
  return str[randomIndex];
}