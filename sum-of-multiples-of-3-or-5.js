// Returns the sum of all the multiples of 3 or 5 below the number passed in

function solution(number) {

    // Input validation (is number and is not 0)

    if (isNaN(number)) {
        return 'Not a number!';
    } else if(number <= 0) {
        return 0;
    } else {
        let sum = 0;
        const nums = [];

        // Search and sum unique multiples of 3 and 5
        
        for (i = 1; i < number; i++) {
            if (i % 3 === 0 || i % 5 === 0 && !nums.includes(i)) {
                nums.push(i);
                sum += i;
            }
        }
        return sum;
    }
}

console.log(solution(13));