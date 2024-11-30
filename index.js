// Task 1
const number = [71, 52, 98];
console.log(number);

number[1] = 743;
console.log(number);

// Task 2
const words = ["hello", "goodbye", ":)"]
console.log(words);

words[3] = "holiday"
console.log(words);

// Task 3
const numbers = [71, 44, 33, 87, 97, 19109191]
let numbersSum = 0

for (let number of numbers) {
    numbersSum += number
}

console.log(numbersSum);

// Task 4
const marks = [10,3,9,12]

for ( let i = 0; i < marks.length; i++) {
    console.log(marks[i]);
}


// Task 5
const subjects = ["PE", "Math", "Ukrainian", "IT", "History"]

for (let subject of subjects) {
    if (subject.length > 5) {
    console.log(subject);
}
}

// Task 6
const dates = [1, 2, 31, 21, 25, 30, 4, 6, 9, 10]
let largestDate = 0

for (let date of dates) {
    if (date > largestDate) {
        largestDate = date
    }
}
console.log(largestDate);

// Task 7
const meters = [32, 66, 121, 274 ,122, 11, 12, 111, 321, 867]
let coupleMeters = 0

for (let meter of meters) {
    if ( meter % 2 === 0) {
      coupleMeters += `${meter},`;
    }
}
console.log(coupleMeters);
