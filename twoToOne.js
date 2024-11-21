
function longest(s1, s2) {
    // Create a new string by concatenating the two arguments
    let s3 = s1 + s2;
    // Create an empty array to store the unique characters
    let myArray = [];
    // Iterate over the characters in the concatenated string
    for (let i = 0; i < s3.length; i++){
      // If the array already contains the character, skip it
      if (myArray.includes(s3[i])){
        continue
      }else{
        // Otherwise, add the character to the array
        myArray.push(s3[i])
      }
    }
    // Sort the array in alphabetical order
    // Join the array into a string and return it
    return myArray.sort().join('');
  }
