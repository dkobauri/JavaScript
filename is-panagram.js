function isPanagram(string){
    const arr = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    let newArr = 0;
    for (let i = 0; i < arr.length; i++) {
        const result = string.toUpperCase().includes(arr[i]) ? (newArr++) : (newArr =+ 0);
    }
    if (newArr == 26) {
        return true;
    } else {
        return false;
    }
}

console.log(isPanagram("The quick brown fox jumps over a lazy dog"));