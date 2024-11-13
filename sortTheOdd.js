//Sort the odd
function sortArray(array) {
    const odd = array.filter(num => num % 2 !== 0).sort((a, b) => a - b);
    let oddIndex = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 !== 0) {
            array[i] = odd[oddIndex];
            oddIndex++;
        }
    }
    return array;
}