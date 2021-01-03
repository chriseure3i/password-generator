var generatePassword = function () {

    // Prompt #1: ask for password length
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