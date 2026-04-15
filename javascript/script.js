// Attach event instead of inline onclick
document.getElementById("runBtn").addEventListener("click", runCode);

function runCode() {
    alert("Hello World");

    console.log("Code is running...");
    console.log("Still running...");
    console.log("Everything looks good!");

    // Trim input and handle cancel case
    let number = prompt("Enter your number:");
    if (number !== null) {
        number = number.trim();
    }

    let isConfirmed = confirm("Are you sure you want to proceed?");

    if (isConfirmed) {
        console.log("Action confirmed 🚀");
    } else {
        console.log("Action cancelled 🙂");
    }

    // Handle empty or cancelled input
    if (number) {
        console.log(`Your number is: ${number}`);
    } else {
        console.log("No valid number entered.");
    }

    // Slightly more dynamic title
    document.title = "Script Executed ✔";
}