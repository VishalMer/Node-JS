// console.log(process.argv);

//console.log(process.argv.slice(2)[0]);


// process.argv.forEach((val,index) => {
//     console.log(`${index}:${val}`);
// });

const minimist = require("minimist");
const newArg = minimist(process.argv.slice(2));
console.log(newArg.name);
//run by = node argument.js --name=Vishal
name=Vishal
//vishal will be printed