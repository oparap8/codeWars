function longestRepetition(string) {
    if (string === "") return ["",0];
    let myObj = {};
    for (let i = 0; i < string.length; i++){
        myObj[string[i]] = (myObj[string[i]] || 0) + 1
        if (!(myObj[string[i]]))
    }
  }