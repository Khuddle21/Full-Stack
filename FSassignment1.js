// Convert identifiers to Camel Case notation:
let someMonth;
function theMonth();
let currentMonth;
let summerMonth;
let myLibraryFunction;

// Literal expressions:
// Numeric literal expression
let numLiteral = 42;
// String literal expression
let strLiteral = "Hello, World!";
// Boolean literal expression
let boolLiteral = true;
// Null literal expression
let nullLiteral = null;

// Complex / variable expressions:
let complexExpr1 = (10 * 5) + (20 / 2); // Arithmetic operations
let complexExpr2 = (numLiteral > 50) && (boolLiteral || false); // Logical operations

// Declare variables using Hungarian notation and Camel Casing:
let sFirstName, sLastName, sAddress, sCity, sState, sZipCode, iYourAge, sReferralSource, bMayWeContactYou;

// Declare and assign values to variables:
// Method 1:
sFirstName = "Kim";
sLastName = "Huddleston";

// Method 2:
let sAddress = "1111 15th street";
let sCity = "San Diego";

// Method 3:
let sState;
sState = "California";

// Combine number and string:
let num = 10;
let str = "Hello";
console.log(num + str); // "10Hello"

// Combine boolean and string:
let bool = true;
let str2 = "World";
console.log(bool + str2); // "trueWorld"

// Fixing string literal:
let someString = 'Who once said, "Only two things are infinite, the universe and human stupidity, and I\'m not sure about the former."';
console.log(someString);

// Producing null and undefined values:
let nullValue = null;
let undefinedValue;
console.log(nullValue); // null
console.log(undefinedValue); // undefined

// Using typeof operator:
console.log(typeof strLiteral); // "string"
console.log(typeof numLiteral); // "number"
console.log(typeof boolLiteral); // "boolean"
console.log(typeof {}); // "object"
console.log(typeof undefinedValue); // "undefined"

// Concatenation using variables:
let name = "Zak Ruvalcaba";
let course = "JavaScript";
alert("Hello " + name + ".\nWelcome to the " + course + " class!");

// Using prompts:
name = prompt("What is your name?");
course = prompt("What class are you taking?");
alert("Hello " + name + ".\nWelcome to the " + course + " class!");

// Basic arithmetic:
let x = 10;
let y = 20;
console.log(x + y); // 30

// Compound assignment:
x = 20;
x += 20;
console.log(x); // 40

// Multiplication assignment:
x = 20;
x *= 5;
console.log(x); // 100

// Remainder assignment:
x = 20 % 3;
x /= 1;
console.log(x); // 2

// Application evaluating to true:
console.log((10 > 5) && (20 < 30)); // true

// Application evaluating to false:
console.log((10 === "10") || (false)); // false
