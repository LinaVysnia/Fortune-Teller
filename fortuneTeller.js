let mothersName = prompt("Enter your mother's first name: ");
let streetName = prompt("Enter the name of the street you grew up on: ");
let favouriteColour = prompt("Enter your favourite colour as a child: ");
let ageCurrent = Number(prompt("Enter your current age: "));
let chosenNumber = Number(prompt("Choose a number between 1 and 10: "));

// Used for texting
// console.log("Variables are: ")
// console.log(mothersName);
// console.log(streetName);
// console.log(favouriteColour);
// console.log(ageCurrent);
// console.log(chosenNumber);

console.log("You will meet your best friend " + mothersName + " " + streetName + " in " + chosenNumber + " years.");
console.log(`You will get married in ${ageCurrent + chosenNumber} years.`);
console.log(`You will have ${ageCurrent % chosenNumber} children.`);
console.log(`In ${Math.round(ageCurrent / chosenNumber)} years you will dye your hair ${favouriteColour}.`);