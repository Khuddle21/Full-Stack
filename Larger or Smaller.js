let num1 = parseInt(prompt("Enter the first integer:"));
let num2 = parseInt(prompt("Enter the second integer:"));

if (num1 === num2) {
    document.write("Both numbers are equal: " + num1);
} else if (num1 > num2) {
    document.write("The larger number is: " + num1);
} else {
    document.write("The larger number is: " + num2);
}
