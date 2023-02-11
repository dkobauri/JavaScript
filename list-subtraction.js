//  subtract one list from another and returns the result

function arrayDiff(a, b) {
    if (Object.keys(a).length !== 0) {
        for (const key of b) {
            for (let i = 0; i < a.length; i++) {
                if (a[i] === key) {
                    a.splice(i, 1);
                    i--;
                }
            }
        }
        return a;
    } else {
        return a = [];
    }
}

console.log(arrayDiff([1, 2, 3, 4], [2, 3]));