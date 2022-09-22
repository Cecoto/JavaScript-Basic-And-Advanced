function solve(numbers) {


    numbers.sort((a, b) => a - b);
  const result = [];

  for (let i = Math.floor(numbers.length/2); i < numbers.length; i++) {
  
    result.push(numbers[i]);
  }
      return result;
}

console.log(solve([4, 7, 2, 5]));
console.log(solve([3, 19, 14, 7, 2, 19, 6]));