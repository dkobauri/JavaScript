// Given an array consisting of movie names, iterate over the array with the output of the names of each movie to the console

const arrOfMovies = ["Movie #1", "Movie #2", "Movie #3", "Movie #4", "Movie #5"];

console.log("--Name of the movies in array--");
arrOfMovies.forEach(name => console.log(name));

// Given an array of car manufacturers, convert the array to a string and back to an array

const arrOfCarManufacturers = ["Toyota", "Ford", "Chevrolet"];

let arrToString = arrOfCarManufacturers.toString();
let stringToArr = arrToString.split(",");

console.log("--Convert array to string and back--");
console.log(arrToString);
console.log(stringToArr);

// Given an array of the names of your friends, add the words hello to each element of the array

const arrOfNames = ["Jane", "Nick", "David"]

const newArrOfNames = arrOfNames.map((currentName) => "Hello " + currentName);

console.log("--Adding 'Hello' to each element in array--");
console.log(newArrOfNames);

// Convert numeric array to Boolean

const arrOfNumbers = [1, 2, 3, 4, 5];

let arrToBoolean = Boolean(arrOfNumbers);

console.log("--Convert array to boolean--");
console.log(arrToBoolean);

// Sort the array [1,6,7,8,3,4,5,6] in descending order

const arrToSort = [1, 6, 7, 8, 3, 4, 5, 6];

let newArrToSort = arrToSort.sort().reverse();

console.log("--Sort an array in descending order--");
console.log(newArrToSort);

// Filter array [1,6,7,8,3,4,5,6] by value> 3

const arrToFilter = [1, 6, 7, 8, 3, 4, 5, 6];

let newArrToFilter = arrToFilter.filter(currentValue => currentValue > 3)

console.log("--Filter array (value > 3)--");
console.log(newArrToFilter);

// Write a function that takes two parameters - an array and a number and outputs the index of an array element equal to a number

const selector = (array, index) => console.log(array[index]);

console.log("--Display value in array by index--");
selector([1, 2, 3], 1)

// Implement a loop that will print the number 'a' until it is less than 10

let i = 0;

console.log("--Display the number untill it is less ehan 10--");
do {
    console.log(i);
    i++;
} while (i < 10);

// Implement a loop that prints prime numbers to the console

console.log("--Display prime numbers--")
for (let i = 1; i <= 10; i++) {
    let flag = 0;

    for (let j = 2; j < i; j++) {
        if (i % j == 0) {
            flag = 1;
            break;
        }
    }

    if (i > 1 && flag == 0) {
        console.log(i);
    }
}

// Implement a loop that prints odd numbers to the console

let k = 0;

console.log("--Display odd numbers--");
do {
    if (k % 2 != 0)
        console.log(k);
    k++;
} while (k < 10);