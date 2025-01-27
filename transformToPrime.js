// Given a List [] of n integers , find minimum number to be inserted in a list, 
// so that sum of all elements of list should equal the closest prime number .
function isPrime(n){
    if (n === 1) return true
    for (let i = 2; i < n; i++){
      if (n % i === 0) return false
    }
    return true
  }
function minimumNumber(numbers){
    let sum = numbers.reduce((accumulator, currentValue) => {
        return accumulator + currentValue
      },0);
    let minNum = 0
    while (!isPrime(sum + minNum)){
        minNum++
    }
    return minNum
}

console.log(minimumNumber([]))