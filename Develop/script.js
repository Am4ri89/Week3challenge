// Assignment code here
var number = ["1234567890"]
var specialChar = [" !#$%&'()*+,-./:;<=>?@[\]^_`{|}~"]

function generatePassword(){
  console.log("generate pass selected");
  // prompt user for password criteria
  prompt("Would you to use a number?");
  prompt("Would you like to use a special character?");
  prompt("Would you like to use upper case letters?")
  prompt("would you like to use lowercase letters?")
  
  // pass length 8 - 128 chars
  password.length() {
    prompt("")
  };
  // lowercase, uppercase, numbers, special chars
  var myStringPassword
  // validate input
  // generate pass based on criteria
}

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
