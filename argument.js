<<<<<<< HEAD
// console.log(process.argv);

//console.log(process.argv.slice(2)[0]);


// process.argv.forEach((val,index) => {
//     console.log(`${index}:${val}`);
// });

const minimist = require("minimist");
const newArg = minimist(process.argv.slice(2));
console.log(newArg.name);
//run by = node argument.js --name=Vishal
=======
// console.log(process.argv);

//console.log(process.argv.slice(2)[0]);


// process.argv.forEach((val,index) => {
//     console.log(`${index}:${val}`);
// });

const minimist = require("minimist");
const newArg = minimist(process.argv.slice(2));
console.log(newArg.name);
//run by = node argument.js --name=Vishal
>>>>>>> e0c68d4332a73ab9a900e0d7a4edb9bc615ab17f
//vishal will be printed