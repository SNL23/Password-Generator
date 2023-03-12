// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
var lowercaseOptions = "abcdefghijklomnpqrstuvwxyz";
var uppercaseOptions = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var  numberic = "0123456789";
var specail = "!@#$%^&*.";

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var password = document.querySelector("#password");

  password.value = password;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// WHEN I click the button to generate a password
function generatePassword(){
  var password = ""
}
// THEN I am presented with a series of prompts for password criteria
var prompt =("Do you want a lowercase?");
var prompt =("Do you want a uppercase?");
var prompt =("Do you want a number?");
var prompt =("Do you want a do special character?");

// THEN I select which criteria to include in the password
// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters
var passwordLength = prompt("How long would you like your password?");
function length() {
  var prompt;
}
// WHEN asked for character types to include in the password
// THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters

var lowercase = confirm("Do you want a lowercase?");
var uppercase = confirm("Do you want an uppercase?");
var numeric = confirm("Do you want a number?");
var special = confirm("Do you want a special character?");

// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected

if(lowercase) {
  password = password + getRandomValue(lowercaseOptions);
} else if (uppercase) {
  password = password + getRandomValue(uppercaseOptions);
} else if(numeric) {
  password = password + getRandomValue(numeric);
} else if (special) {
  password = password + getRandomValue(special);
}
// THEN a password is generated that matches the selected criteria
for (var i = 0; i < password.length, i++;) {
  password = password + getRandomValue(lowercaseOptions);
} 

// THEN the password is either displayed in an alert or written to the page 

function getRandomValue(str){
  var randomIndex = Math.floor(Math.random() * str.length);
  return str[randomIndex];
}