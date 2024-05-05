#! /user/bin/env node
import inquirer from "inquirer";
// 1) computer will generate a random number.
// 2) user input for guessing number.
// 3) compare user input with computer generated number and show result.
const randomNumber = Math.floor(Math.random() * 5 + 1);
console.log("Welcome to the guessing game.");
// console.log(randomNumber);
const answers = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        message: "please guess a number between 1 - 5",
        type: "number",
    },
]);
if (answers.userGuessedNumber === randomNumber) {
    console.log("Congtratulation! you guessed right number.");
}
else {
    console.log(" you guessed wrong number.");
}
