//  Question-1= What will be the output of this code snippet and why? 
let day = "Monday";

switch (day) {
   case "monday":
       console.log("It's the start of the week.");
       break;
   default:
       console.log("It's a normal day.");
}
// output will be = "It's a normal day.", because of case "monday" does not matched due to case sensitivity. Like "monday" is not equal to "Monday", that is why it will go for default case.


// Question-2= Build an ATM Cash Withdrawal System
const amount = 500
if (amount % 100 === 0) {
    console.log("Withdrawal successful")
} else {
    console.log("Invalid amount")
}


// Question-3= Build a Calculator with switch-case



// Question-4= Pay for your movie ticket
const ticketPriceForChildren = 3
const ticketPriceForAdult = 10
const ticketPriceForSenior = 8

let personAge = 100

if (personAge < 18) {
    console.log(`Your ticket price is: $${ticketPriceForChildren}`)
} else if (personAge >= 18 && personAge <= 60) {
    console.log(`Your ticket price is: $${ticketPriceForAdult}`)
} else {
    console.log(`Your ticket price is: $${ticketPriceForSenior}`)
}