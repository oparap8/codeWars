// In this Kata, you will be given an array of strings and your task is
// to remove all consecutive duplicate letters from each string in the array.
// For example:
// dup(["abracadabra","allottee","assessee"]) = ["abracadabra","alote","asese"].
// dup(["kelless","keenness"]) = ["keles","kenes"].
// Strings will be lowercase only, no spaces. See test cases for more examples.
function dup(arrString) {
  let newArray = [];
  for (let string of arrString){
    let newString = '';
    for (let i = 0; i < string.length; i++){
      if (newString[newString.length - 1] !== string[i]){
        newString += string[i]
      }else{
        continue
      }
    }
    newArray.push(newString)
  }
  return newArray
};