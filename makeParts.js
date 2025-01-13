function makeParts(array, chunk) {
    let newArray = [];
    while (array.length > chunk){
        let nestArray = [];
        for (let i = 0; i < chunk; i++){
            nestArray.push(array.shift())
        }
        newArray.push(nestArray)
    }
    if (array.length > 0){
        newArray.push(array)
    }
    return newArray
  }