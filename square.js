const numbers = [2, 7, 9, 171, 52, 33, 14]

const toSquare = num => num * num

// Write your code here:

function squareNums(numbers) {
  return numbers.map(num=>num**2);
}

console.log(squareNums(numbers));