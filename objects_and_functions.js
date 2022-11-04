// Create a car object, add a color property to it with the value equals 'black'

const car = {
    color: "black"
}
console.log("--Create Object--")
console.log(car)

// Change the color property of the car object to 'green'

car.color = "green"

console.log("--Change property value--")
console.log(car)

// Add the power property to the car object, which is a function and displays the engine power to the console

car.power = (power) => console.log("Engione Power:", power)

console.log("--Display engine power--")
car.power(150)

// Pears and apples are accepted to the warehouse, write a function that returns the result of adding the number of accepted pears and apples

const warehouse = (pears, apples) => pears + apples

console.log("--Add pears and apples--")
console.log(warehouse(5, 10))

// Your name is saved in the payment terminal, write a function to define the name in the terminal (if you entered your name, then hello + name, if not, then there is no such name)

const terminal = name => name ? console.log("hello ", name) : console.log("there is no such name");

console.log("--Terminal name--")
terminal("David")
terminal()

// Write a function for calculating the type of argument and type output to the console

const calc = arg =>console.log(arg)

console.log("--Calculate the argument and display output--")
calc(5 + 6)

// Write a function that determines whether a number is prime or not

const prime = num => {
    for(let i = 2; i < num; i++)
        if(num % i == 0)
            return console.log("Number is not prime!"); 
    return console.log("Number is prime!");
}

console.log("--Prime numbers--")
prime(11)
prime(12)