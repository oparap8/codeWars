var capitals = function (word) {
    let newWord = word.toUpperCase();
  let myArray = [];
  for (let i = 0; i < word.length; i++){
    if (word[i] === newWord[i]){
      myArray.push(i)
    }
  }
  return myArray
};