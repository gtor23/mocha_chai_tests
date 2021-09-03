// import the chai library
const chai = require('chai');
//import expect object
const expect = chai.expect;

//import the calculator file
const calculator = require('../src/calculator');   
// can also deconstruct
// const {add, subtract, multiply, divide} = require('../src/calculator');

// create main structure calculator to test four math operations (+, -, *, /)
describe ('Calculator', () => {
// test cases for summing 2 numbers   
    describe('Addition', () => {
        it('1 + 1 should be equals to 2', () => {
            expect(calculator.add(1,1)).to.equal(2)
        })
        it('should sum two numbers', () => {
            expect(calculator.add(1,1)).to.equal(2)
            expect(calculator.add(50,39)).to.equal(89)
            expect(calculator.add(-31,32)).to.equal(1)
            expect(calculator.add(10000,89999)).to.equal(99999)
        })
    })


// test cases for subtracting 2 numbers
    describe('Subtraction', () => {
        it('1 - 1 should be equals to 0', () => {
            expect(calculator.subtract(1,1)).to.equal(0)
        })
        it('should subtract two numbers', () => {
            expect(calculator.subtract(6,2)).to.equal(4)
            expect(calculator.subtract(50,39)).to.equal(11)
            expect(calculator.subtract(-31,32)).to.equal(-63)
            expect(calculator.subtract(10000,89999)).to.equal(-79999)
        })
    })

// test cases for multiplying 2 numbers
    describe('Multiplication', () => {
        it('1 * 1 should be equals to 1', () => {
            expect(calculator.multiply(1,1)).to.equal(1)
        })
        it('should multiply two numbers', () => {
            expect(calculator.multiply(3,2)).to.equal(6)
            expect(calculator.multiply(50,39)).to.equal(1950)
            expect(calculator.multiply(-31,32)).to.equal(-992)
            expect(calculator.multiply(-5,-2)).to.equal(10)
        })
    })

// test cases for dividing 2 numbers
    describe('Division', () => {
        it('1 / 1 should be equals to 1', () => {
            expect(calculator.divide(1,1)).to.equal(1)
        })
        it('should divide two numbers', () => {
            expect(calculator.divide(4,2)).to.equal(2)
            expect(calculator.divide(50,5)).to.equal(10)
            expect(calculator.divide(-15,2)).to.equal(-7.5)
        })
        it('should return NaN if the denominator is zero', () => {
            expect(calculator.divide(4,0)).to.equal(undefined)
            expect(calculator.divide(50,0)).to.equal(undefined)
            expect(calculator.divide(-15,0)).to.equal(undefined)
        })
    })

})