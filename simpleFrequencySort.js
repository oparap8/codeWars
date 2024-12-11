function solve(arr){
    let myObj = {};
    let myArray = [];
    arr.forEach(element => {
      myObj[element] = (myObj[element] || 0) + 1;
    })
   let placeholder = Object.entries(myObj).sort((a,b) => b[1] - a[1]);
    for (let array of placeholder){
      for (let i = 0; i < array[1]; i++){
        myArray.push(Number(array[0]))
      }
    }
    return myArray
  }
