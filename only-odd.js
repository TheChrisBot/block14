//Create a JavaScript code that accepts an array of numbers and returns a new array with only the odd numbers from 
//the original array. If there is only one odd number in the array, return an array with that single value.
const set1 = [2, 4, 6, 8, 11, 20, 15, 22];

const set2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const set3 = [70, 42, 55, 81, 21, 91, 34];

const set4 = [2, 4, 6, 8, 10, 11, 12];
//This bottom part should do the sorting I hope...
const sortOddNumbers = (numbers) => {
  const oddNumbers = numbers.filter(number => number % 2);
  console.log(oddNumbers);
};

console.log(sortOddNumbers(set1, set2, set3, set4));