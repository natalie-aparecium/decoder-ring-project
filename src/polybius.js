// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope

  const polybiusSquare = { 
    1: ["a", "b", "c", "d", "e"], 
    2: ["f", "g", "h", "i/j", "k"], 
    3: ["l", "m", "n", "o", "p"], 
    4: ["q", "r", "s", "t", "u"], 
    5: ["v", "w", "x", "y", "z"] 
  };

  //helper function to help encode a message
  function squareEncoder(char){
    //variable to hold
    let keysLength = Object.keys(polybiusSquare).length;
    //loop through each row of square
    for (let i = 0; i < keysLength; i++){
      let rowNum = i + 1;
      //loop through row of values
      let rowlength = polybiusSquare[rowNum].length;
      for (let j = 0; j < rowlength; j++){
        let charNum = j + 1;
        //check if character matches letter with both numbers
        let charToCheck = polybiusSquare[rowNum][j];
        if (charToCheck.includes(char)){
          let result = [charNum, rowNum];
          return result.join("");
        }
      }
    }

    //if not a letter, no change return character
    return char;
  }

  //helper function to help decode message
  function squareDecoder(double){
    // Separate 2 numbers
    const split = double.split("");
    // Assign x and y coordinate from split number
    const x = split[0];
    const y = split[1];

    // Retrieve row
    squareRow = polybiusSquare[y];
    //Retrieve letter in row
    letter = squareRow[x - 1];
    
    //console.log(letter);
    return letter;

  }

  function polybius(input, encode = true) {
    // your solution code here
    let message = [];

    /*encoding a message */
    if(encode === true){
      //ignore capital letters and split string into an array of characters
      let formattedInput = input.toLowerCase().split("");
      //encode message using squareLetterFinder
      formattedInput.forEach((char) => {
        message.push(squareEncoder(char));
      });

      //join array and return
      return message.join("")
    }
    /*decoding a message */
    else {
      let isOdd = false;
      // Convert number to String type
      const formattedInput = input.toString()
      //console.log(formattedInput);
      // Separate encoded words
      const encodedWords = formattedInput.split(" ");

      // Handle single or multiple decoded words
      encodedWords.forEach((word) => {
        const decodedWords = [];
        // Check that length of string of numbers is even
        if (word.length % 2 != 0) {
          isOdd = true;
          return;
        }
        // Pair off numbers
        doubleDigitArray = word.match(/.{1,2}/g);
        // Decode message with squareDecoder
        doubleDigitArray.forEach((double) => {
          decodedWords.push(squareDecoder(double));
        });
        message.push(decodedWords.join(""));
      });

      // Return false is length of string of numbers was odd
      if (isOdd) return false;

      return message.join(" ");
    }

  }

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
