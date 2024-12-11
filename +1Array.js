function upArray(arr) {
    // First, check to see if the array is empty.
    // If it is, return null.
    if (arr.length < 1) return null;

    // Next, loop through the array and check to see if any of the elements
    // are less than 0 or greater than 9. If they are, return null.
    for (let num of arr) {
        if (Number(num) < 0 || Number(num) > 9) {
            return null;
        }
    }

    // Now, count the number of zeros at the beginning of the array.
    let zeroCount = 0;
    let idx = 0;
    while (Number(arr[idx]) === 0) {
        zeroCount++;
        idx++;
    }

    // Convert the array to a number, add 1 to it, and convert it back to an array.
    // This is the new array that has been "upped" by one.
    let myArray = (Number(arr.join('')) + 1).toString().split('');

    // Convert the elements of the array to numbers so we can do math on them.
    let newArray = myArray.map(element => Number(element));

    // Finally, add the zeros we counted back to the beginning of the array.
    for (let i = 0; i < zeroCount; i++) {
        newArray.unshift(0);
    }

    // Return the new array.
    return newArray;
  }

  console.log(upArray([1,2,3,4,5,6,7,8,9,0,1,2,3,4,5,6,7,8,9,0]))