function checkEvenOdd(num) {
    if (num % 2 ===0){
        return "четное";
    }
    else {
        return "нечетное"
    }
}

console.log(checkEvenOdd(2))
console.log(checkEvenOdd(7))

function factorial(n) {
    if (n === 0) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}

console.log(factorial(5));
console.log(factorial(0));

const findMax = (numbers) => {
    if (numbers.length === 0) {
        return null;
    }
    return numbers.reduce(
        (acc, number) => (number > acc ? number : acc),
        numbers[0]
    );
};

console.log(findMax([1, 5, 3, 9, 2], 2));
console.log(findMax([-5, -1, -8]));

function countVowels(str) {
    str = str.toLowerCase();
    const vowels = ['a','e','i','o','u'];
    let count = 0;
    for (let char of str) {
        if (vowels.includes(char)) {
            count++;
        }
    }
    return count;
}
console.log(countVowels("hello"));
console.log(countVowels("world"));

function sumArray(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

console.log(sumArray([1, 2, 3, 4, 5]));
console.log(sumArray([-1, -2, 3]));



