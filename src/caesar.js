// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope

  function caesar(input, shift, encode = true) {
    // your solution code here

    //declare a return varaible to hold deciphered code
    let output = "";

    /*error handling return false if shift is not present, equal to 0, less than -25, or greater than 25 */
    if(shift == null || shift === 0 || shift < -25 || shift > 25){
      return false;
    }

    /*should ignore capital letters */
    let lowerCaseInput = input.toLowerCase();

    //console.log("XXX");
    //console.log(shift);
    //console.log(lowerCaseInput);
    //String.fromCharCode(((code - 97 + amount) % 26) + 97);
    let shift2 = shift % 26;

    /*encoding a message */
    if (encode === true){
      //for loop to loop through inputted string
      for (let i = 0; i < lowerCaseInput.length; i++){

        //declare a variable to represent the character to decipher
        let currentChar = lowerCaseInput[i];

        //declare a variable to represent the characters code
        let code  = lowerCaseInput.charCodeAt(i);
        //console.log(code);

        //since all character letters are lower case the code numbers will be between 97-122
        /*if the character is one of the alphabet letters, then the following code will run.
         No code will be changed to the character if it is not a letter*/
        if (code >= 97 && code <= 122) {

          //add shift2 to number code to help determine whether the program code needs add or subtract 26
          code += shift2;
          //console.log(code);

          if (code > 122) {
            code = code - 26;
          } 
          else if (code < 97) {
            code = code + 26;
          }

          //get deciphered code into a string
          currentChar = String.fromCharCode(code);
        }

        //console.log(currentChar);

        //add the deciphered character(currentChar) into output
        output += currentChar;
      }
      

    }
    /*decoding code */
    else{
      //for loop to loop through inputted string
      for (let i = 0; i < lowerCaseInput.length; i++){

        //declare a variable to represent the character to decipher
        let currentChar = lowerCaseInput[i];

        //declare a variable to represent the characters code
        let code  = lowerCaseInput.charCodeAt(i);
        //console.log(code);

        //since all character letters are lower case the code numbers will be between 97-122
        /*if the character is one of the alphabet letters, then the following code will run.
         No code will be changed to the character if it is not a letter*/
        if (code >= 97 && code <= 122) {

          //subtract (because we need to go the opposite) shift2
          code -= shift2;
          //console.log(code);

          if (code > 122) {
            code = code - 26;
          } 
          else if (code < 97) {
            code = code + 26;
          }

          //get deciphered code into a string
          currentChar = String.fromCharCode(code);
        }

        //console.log(currentChar);

        //add the deciphered character(currentChar) into output
        output += currentChar;
      }

    }

    //console.log(output);
    return output;

  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
