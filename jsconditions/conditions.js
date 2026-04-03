console.log("Conditional Tutorial");

let age = 1;

// Function for better structure & reusability
function checkDrivingEligibility(age) {
    if (age === 18) {
        console.log("You can drive");
    } 
    else if (age <= 0) {
        console.log("Invalid age. Are you kidding?");
    } 
    else if (age === 1) {
        console.log("You're too young to even ask 😄");
    } 
    else {
        console.log("You cannot drive");
    }
}

checkDrivingEligibility(age);

// Find absolute difference between two numbers
let a = 6;
let b = 8;

// Cleaner approach using Math.abs()
let difference = Math.abs(a - b);

console.log("Difference:", difference);