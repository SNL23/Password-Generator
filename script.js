// Assignment code here

var generateBtn = document.querySelector("#generate");
var lowercaseOptions = "abcdefghijklomnpqrstuvwxyz";
var uppercaseOptions = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numberic = "0123456789";
var specail = "!@#$%^&*.";

function writePassword() {
  var finalpassword = generatePassword();
  var passwordcontainer = document.querySelector("#password");

  passwordcontainer.textContent = finalpassword;
}

generateBtn.addEventListener("click", writePassword);

function options() {
  var passwordLength = prompt("How long would you like your password?");
  var optlowercase = confirm("Do you want a lowercase?");
  var optuppercase = confirm("Do you want a uppercase?");
  var optnumeric = confirm("Do you want a number?");
  var optspecial = confirm("Do you want a do special character?");
  var optpwdOptions = { passwordLength, optlowercase, optuppercase, optnumeric, optspecial }
  return optpwdOptions;
}

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
  
  for (var i = 0; i < opt.passwordLength; i++) {
    if (opt.optlowercase) {
      password = password + getRandomValue(lowercaseOptions);
    } if (opt.optuppercase) {
      password = password + getRandomValue(uppercaseOptions);
    } if (opt.optnumeric) {
      password = password + getRandomValue(numberic);
    } if (opt.optspecial) {
      password = password + getRandomValue(specail);
    }
  }
  console.log(password)
  return password.substring(0, opt.passwordLength);
}

function getRandomValue(str) {
  var randomIndex = Math.floor(Math.random() * str.length);
  return str[randomIndex];
}