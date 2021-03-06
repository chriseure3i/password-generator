var generatePassword = function () {

    // Prompt #1: password length
    var invalidLength = true; // The output of this window prompt will be a string, thus an invalid length
  
    while (invalidLength) {
      // Ask the user to enter the number of characters
      var passwordLength = parseInt(window.prompt("Please enter how many characters you would like the password to be."));
      
      if (!passwordLength) { // If the password length (after being parseInt) is not a number then...
        
        window.alert("Please enter a valid number."); // show error alert if the number doesnt fit this criteria
      
      } else if (passwordLength < 8 || passwordLength > 128) { // Now check if the number that was entered was less than 8 and greater than 128
        
        window.alert("Please enter a valid number that is between 8 and 128")
      
      } else {
        
        invalidLength = false; // If both conditions are true, switch invalidLength to false so it can exit the while loop
        break; // break out of the while loop; if for whatever reason, this doesnt work, the invalidLength = false will break it as well 
      
      }
    }

      // Prompt #2: array
  var charTypes = [
    {
      name: "lowercase",
      included: true,
      chars: "abcdefghijklmnopqrstuvwxyz"
    },
    {
      name: "UPPERCASE",
      included: true,
      chars: "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    },
    {
      name: "numeric",
      included: true,
      chars: "0123456789"
    },
    {
      name: "special",
      included: true,
      chars: " !\"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~"
    },
  ];
   
   var noneSelected = true; // Since none are selected this will be true, so we can enter the while loop

   while (noneSelected) {
     // have a running "list" of characters that are acceptable (it is really a string that will be added onto)
     // this string will start as empty
     var acceptableChars = "";
     // loop through the array of objects
     for (i = 0; i < charTypes.length; i++) {
       var includedConfirm = window.confirm("Would you like your password to include " + charTypes[i].name + " characters?");
       if (includedConfirm) {
         charTypes[i].included = true; 
         
         acceptableChars = acceptableChars + charTypes[i].chars
         
         noneSelected = false
       } else {
         charTypes[i].included = false;
       };
     };
 
     // Give an alert if none of the options were selected
     if (noneSelected) {
       window.alert("Please make sure you select atleast one of the character types.")
     };
   };

   // Enter For loop to generate password
  var generatedPassword = ""; // Start with empty string; every loop will add another character

 
  for (i=0; i < passwordLength; i++) {
    // Create index to choose from our built list of characters
    // the index must be between 0 and the length of acceptableChars - 1 
    // (i.e. length of acceptableChars is 52; random index must be between 0 & 51 inclusive)
    var charIndex = Math.random() // Random number between 0 & 1 (not including 1)
    charIndex = charIndex * acceptableChars.length // Random number between 0 & acceptableChars length (not including length)
    charIndex = Math.floor(charIndex) // Rounds random number down; now between 0 & acceptableChars length-1

    var passwordChar = acceptableChars.charAt(charIndex) // Extract character at the certain index
    generatedPassword += passwordChar // Append the character to the generated password
  }

  return generatedPassword; 
}

var generateBtn = document.querySelector("#generate");


function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  console.log("Password generated!")

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);