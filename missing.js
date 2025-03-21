//Given an array of numbers from 1 to N with one missing number, find the missing number.
// Example:
findMissingNumber([1, 2, 4, 5, 6]); // 3
function findMissingNumber(arr) {
  let n = arr.length + 1;
  let total = (n * (n + 1)) / 2;
  let sum = arr.reduce((a, b) => a + b);
  return total - sum;
  
}
console.log(findMissingNumber([1, 2, 4, 5, 6]));