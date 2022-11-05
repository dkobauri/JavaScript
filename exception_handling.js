// In a try catch construction, wrap the code: console.log (a), let a = 3. And display an error - ‘let must be declared’ before use. 

try {
    console.log (a);
    let a = 3;
} catch {
    console.log("let must be declared");
}

// When running 1/0, the error 'cannot be divided by zero'

try {
    let b = 1;
    let c = 0;
    let z = b / c;
    console.log(z.isFinite());
} catch {
    console.log("cannot be divided by zero");
}