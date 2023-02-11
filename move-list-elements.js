// takes an array and moves all of the zeros to the end, preserving the order of the other elements.

function moveZeros (arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 0) {
            arr.splice(arr.length, 0, arr[i]); // add 1 element at the end of the arr ("0")
            arr.splice(arr.indexOf(arr[i]), 1); // remove 1 element with index 2
        }
    }
    return arr;
}

console.log(moveZeros([1, 2, 0, 4, 5, 0, 7]));