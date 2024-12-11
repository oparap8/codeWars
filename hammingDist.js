// The Hamming Distance is a measure of similarity between two strings of equal length. 
// Complete the function so that it returns the number of positions where the input strings do not match.
// Examples:
// a = "I like turtles"
// b = "I like turkeys"
// Result: 3
// a = "Hello World"
// b = "Hello World"
// Result: 0
// a = "espresso"
// b = "Expresso"
// Result: 2
function hamming(first, second) {
	let hamDist = 0
  for (let i = 0; i < first.length; i++){
    if (first[i] !== second[i]) hamDist++
  }
  return hamDist
}