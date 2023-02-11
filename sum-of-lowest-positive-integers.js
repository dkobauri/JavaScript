// Returns sum of two lowest positive integers

function sumTwoSmallestNumbers(numbers) {  

    // Sort the array from min to max
    const arr = numbers.sort(function(a, b) {
        return a - b;
    });

    // Return sum of first two numbers.
    const sum = numbers[0] + numbers[1];
    return sum;
}

console.log(sumTwoSmallestNumbers([1, 2, 3, 4, 5, 6]));