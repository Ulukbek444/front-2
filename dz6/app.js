let numbers = [15, 8, 23, 42, 4, 16, 9, 31];
numbers = numbers.sort((a, b) => a - b);
console.log(numbers);
let first4 = numbers.slice(0, 4);
console.log(first4);
let last3 = numbers.slice(-3);
console.log(last3)
for (let num of last3) {
    first4.push(num)
}
console.log(first4)
first4 = first4.join(', ')
console.log(first4)
const numArray = []
const strArray = []
let count = 0
let mixedArray = [12, 'hello', 25, true, 8, 'world', 33, false, 7];
let numsSumInArray = 0;
const everyItemsInArray = []
for (let i = 0; i < mixedArray.length; i++) {
    if (typeof mixedArray[i] === "number") {
        numArray.push(mixedArray[i]);
        numsSumInArray += mixedArray[i];
        count++
    } else if (typeof mixedArray[i] === "string") {
        strArray.push(mixedArray[i]);
    }
    if (i !== 0 && i % 2 === 0) {
        everyItemsInArray.push(mixedArray[i]);
    }

}


console.log(numArray)
console.log(strArray)
console.log(count)
console.log(numsSumInArray)
console.log(everyItemsInArray)
let grades = [85, 92, 78, 96, 87, 73, 89, 94, 82, 90];

// 1. Найдёт максимальную оценку
let maxGrade = 0;
let sum = 0;

let countAbove85 = 0;
let minGrade = grades[0];
let excellentGrades = [];
for (let grade of grades) {
    if (grade > maxGrade) {
        maxGrade = grade;
    }
    else if (grade < minGrade) {
        minGrade = grade;
    }

    if (grade > 85) {
        countAbove85++;
    }
    if (grade >= 90) {
        excellentGrades.push(grade);
    }
    sum += grade;
}
console.log(maxGrade)
console.log(minGrade)



let average = sum / grades.length;
console.log(average)
console.log(excellentGrades)
const sortedGrades = grades.sort((a, b) => b -a );

console.log(sortedGrades);
