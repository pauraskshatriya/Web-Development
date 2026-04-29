console.log("Conditional Demo");

// Use meaningful variable names
const age = 1;

// Group edge cases first
if (age <= 0) {
    console.log("Invalid age entered");
} 
else if (age < 18) {
    console.log("You cannot drive");
} 
else if (age === 18) {
    console.log("You can drive");
} 
else {
    console.log("You are allowed to drive");
}

// Cleaner difference calculation using Math.abs
const a = 6;
const b = 8;

const difference = Math.abs(a - b);

console.log(`The difference between ${a} and ${b} is: ${difference}`);