function toUnderscore(string) {
    if (Number.isInteger(string)) return string.toString()
      let nums = '0123456789';  
      let idx = [];
      for (let i = 0; i < string.length; i++) {
          if (string[i] === string[i].toUpperCase() && !nums.includes(string[i])) {
              idx.push(i);
          }
      }
      let newArray = new Array(idx.length);
      for (let i = 0; i < idx.length; i++){
          newArray[i] = string.slice(idx[i], idx[i + 1]).toLowerCase();
      }
      return newArray.join('_')
  }
  