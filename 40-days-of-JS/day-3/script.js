// Problem -1 = Odd or Even?
const number = 8
const isEvenNumber = number % 2 === 0
isEvenNumber ? console.log("The number: ", number, " is an even number") : console.log("The number: ", number, " is an odd number")


// Problem -2 = Do you have a Driving License?
const age = 18
const isEligibleToGetLicense = age >= 18
isEligibleToGetLicense ? console.log("You are eligible to get a driving license") : console.log("You are not eligible to get a driving license")



// Problem -3 =  Calculate CTC with a Bonus
const salary = 12300;
const annualSalary = salary * 12;
const bonus = annualSalary * 0.20;
const ctc = annualSalary + bonus;

console.log("Per year CTC:", ctc);



// Problem -4 = Write a program for the Traffic Light Simulation
const color = "Green";
color === "Green"
  ? console.log("GO")
  : color === "Red"
  ? console.log("STOP")
  : console.log("Invalid color");



// Problem -5 = Create an Electricity Bill Calculator
const units = 5
const perUnitCost = 150

const perMonthCharge = units * perUnitCost * 30
console.log("Per month electricity bill is: ", perMonthCharge)

const discountOnPreAnnualPayment = perMonthCharge * 12 / 100 * 20
const annualBillAfterDiscount = perMonthCharge * 12 - discountOnPreAnnualPayment
console.log("Charged for an annual payment: ", annualBillAfterDiscount)


// Problem -6 = Leap Year Checker
const year =  Number(prompt("Please enter the year:"));
const isLeapYear = (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0
isLeapYear ? console.log(year, " is a leap year") : console.log(year, " is not a leap year")


// Problem -7 = Max of Three Numbers
const p = 10
const q = 20
const r = 30
const largestNumber = p >= q && p >= r ? p : q >= p && q >= r ? q : r 
console.log("The largest number is: ", largestNumber)


// Problem -8 = Bitwise Doubling
const count = 5
const doubled = count << 1;
console.log("Doubled via bitwise shift operator: ", doubled)
