// counts how many simbols have duplication

function duplicateCount(text){
    text = text.toUpperCase();
    const chars = {};
    for (const char of text) {
        chars[char] = (chars[char] || 0) + 1;
    }
    return Object.entries(chars).filter(char => char[1] > 1).map(char => char[0]).length;
}

console.log(duplicateCount("level"));