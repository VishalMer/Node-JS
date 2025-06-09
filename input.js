<<<<<<< HEAD
const readLine = require("readline");

const rl = readLine.createInterface({
    input:process.stdin,
    output:process.stdout,
});

// rl.question(`What is your name ?`, (name) => {
//     console.log(`Hi ${name}`);
//     rl.close();
// });  

const Prompt = require("prompt-sync")();
const name = Prompt("What is your name ?");
=======
const readLine = require("readline");

const rl = readLine.createInterface({
    input:process.stdin,
    output:process.stdout,
});

// rl.question(`What is your name ?`, (name) => {
//     console.log(`Hi ${name}`);
//     rl.close();
// });  

const Prompt = require("prompt-sync")();
const name = Prompt("What is your name ?");
>>>>>>> e0c68d4332a73ab9a900e0d7a4edb9bc615ab17f
console.log(`Hi ${name}`);