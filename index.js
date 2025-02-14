// reduce method


// sum of. numbers in an array
const numbers = [1, 2, 3, 4];
let sum = 0;
for (let i = 0; i < numbers.length; i++) {
  sum = sum + numbers[i];
}
console.log(sum);

const sumOfNumbers = numbers.reduce((accumulater, currentValue) => accumulater + currentValue , 0);
console.log(sumOfNumbers)

// concatenate into a single string

const stringsArray = ["Hello", "World", "!"]

const combinedString = stringsArray.reduce((accumulater, currentValue) => accumulater + currentValue, "")

console.log(combinedString)

// find the maximum number in an array 

const numbersArray = [10, 5, 8, 20, 15]
const  maxNumber = numbersArray.reduce((accumulater, currentValue)=>
     (accumulater < currentValue ? currentValue : accumulater), numbersArray[0])
console.log(maxNumber)


// occurrence of each word in an array

const fruits = ["apple", "banana", "apple", "orange", "kiwi"]
// output {apple: 2, banana: 1, orange: 1, kiwi: 2}

const wordCount = fruits.reduce((accumulater, currentValue) => 
    {accumulater[currentValue] = (accumulater[currentValue] || 0) + 1
        return accumulater
     }, {} )
     console.log(wordCount)