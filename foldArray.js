function foldArray(arr, runs){
    for (let i = 0; i < runs; i++){
        // Find the middle index of the array
        let mid = Math.ceil(arr.length / 2) - 1;

        // Split the array into two halves
        let firstHalf = arr.slice(0, mid + 1);
        let secondHalf = arr.slice(mid + 1);

        // Reverse the second half
        secondHalf.reverse();

        // Create a new array by summing the elements of the first and second halves
        let newArr = [];
        for (let j = 0; j < firstHalf.length; j++){
            newArr.push((firstHalf[j] || 0) + (secondHalf[j] || 0))
        }

        // Replace the original array with the new array
        arr = newArr
    }
    return arr
}

console.log(foldArray([1,2,3,4,5], 5))