function sumOfMinimums(arr) {
    let myArray = [];
    for (let i = 0; i < arr.length; i++){
      myArray.push(arr[i].sort()[0]);
    }
    return myArray.reduce((acc, curr) => acc + curr)
  }

  console.log(sumOfMinimums([[7, 9, 8, 6, 2], [6, 3, 5, 4, 3], [5, 8, 7, 4, 5]]));