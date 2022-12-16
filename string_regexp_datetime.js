// String Declaration
const firstString = 'ahb acb aeb aeeb adcb axeb';
const secondString = '2 + 3 223 2223';

// Given the string 'ahb acb aeb aeeb adcb axeb'. Write a regular expression that matches the strings ahb, acb, aeb by pattern: letter 'a', any character, letter 'b'

const matching = /[\ba]+[\S][b\b]/g;
console.log("--Match the string by pattern--");
console.log(firstString.match(matching));

// Given the string '2 + 3 223 2223'. Write a regex that finds line 2 + 3 without capturing the rest

const sliced = secondString.slice(0,5);
console.log("--Slice the string--");
console.log(sliced);

// Get the day, month and year of the current date and output it to the console separately

const date = new Date();
const year = date.getFullYear();
const month = date.getMonth() + 1;
const day = date.getDay();

console.log("--Display day, monthe and year--");
console.log(day);
console.log(month);
console.log(year);
