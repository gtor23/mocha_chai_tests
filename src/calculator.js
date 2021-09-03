//create an add function
const add = (a,b) => a + b;
//create a subtract function
const subtract = (a,b) => a - b;
//create a multiply function
const multiply = (a,b) => a * b;
//create a divide function
//use ternary to return 0 in the case that b equals 0 due to divide by 0
// Ex: a=1, b=0  ---> 1/0 = undefined
const divide = (a,b) => b !== 0 ? (a/b) : undefined;

//export the functions
module.exports = {
    add, subtract, multiply, divide
}