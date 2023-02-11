// Checks array and returns only anagrams

function anagrams(word, words) {
    const sort = str => str.split('').sort((a, b) => a.localeCompare(b)).join('');
    const newArray = [];
    for (let i = 0; i < words.length; i++) {
        if (sort(word) === sort(words[i])) {
            newArray.push(words[i]);
        }
    }
    return newArray;
}

console.log(anagrams("live", ["evil", "honor"]));