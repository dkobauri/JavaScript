// Convert string to camel case

function toCamelCase(str){

    // Input validation (is string and is not empty space)

    if (str === '' || typeof str !== 'string') {
        return 'Provide string for the function!'
    } else if (str.includes('-')) {
        const arrayOfStr = str.split('-'); 
        for (i = 1; i < arrayOfStr.length; i++) { 
            arrayOfStr[i] = arrayOfStr[i].charAt(0).toUpperCase() + arrayOfStr[i].slice(1);
        }
        return arrayOfStr.join('');
    } else if (str.includes(' ')) {
        const arrayOfStr = str.split(' '); 
        for (i = 1; i < arrayOfStr.length; i++) { 
            arrayOfStr[i] = arrayOfStr[i].charAt(0).toUpperCase() + arrayOfStr[i].slice(1);
        }
    return arrayOfStr.join('');
    } else if (str.includes('_')) {
        const arrayOfStr = str.split('_');
        for (i = 1; i < arrayOfStr.length; i++) {
            arrayOfStr[i] = arrayOfStr[i].charAt(0).toUpperCase() + arrayOfStr[i].slice(1);
        }
        return arrayOfStr.join('');
    }
}

console.log(toCamelCase("string to camel case"));