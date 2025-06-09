<<<<<<< HEAD
const x = "1";
const y = "2";
// console.log(1,2);

// %s formate variable to String
// %d for Number
// %i for integer
// %o for object
// console.log("My name is %s and i am %d years old.","Vishal Mer",20)

//console properties
// console.clear();
// console.count("I'm Vishal");
// console.count("I'm Vishal");
// console.count("I'm Dhaval");
// console.countReset("I'm Vishal");
// console.log("Count reseted for - I'm Vishal");
// console.count("I'm Vishal");
// console.count("I'm Dhaval");


//TRACE Value
// const function1 = () => console.trace();
// const function2 = () => function1();
// function2();


//Time measurement
// const sum = () => console.log(`The sum of 2 and 3 is ${2 + 3}`);
// const multiply = () =>  console.log(`The multiply of 2 and 3 is ${2 * 3}`);
// const measureTime = () => {
//     console.time("sum()");
//     sum();
//     console.timeEnd("sum()");

//     console.time("multiply()");
//     multiply();
//     console.timeEnd("multiply()");
// };
// measureTime();


//Progressbar
const ProgressBar = require("progress");

const bar = new ProgressBar("downloading [:bar] :rate/bps :percent :etas", {
     total :20,
});

const timer = setInterval (() => {
    bar.tick();
    if(bar.complete){
        clearInterval(timer);
    }
},500);

const chalk = require ("chalk");
=======
const x = "1";
const y = "2";
// console.log(1,2);

// %s formate variable to String
// %d for Number
// %i for integer
// %o for object
// console.log("My name is %s and i am %d years old.","Vishal Mer",20)

//console properties
// console.clear();
// console.count("I'm Vishal");
// console.count("I'm Vishal");
// console.count("I'm Dhaval");
// console.countReset("I'm Vishal");
// console.log("Count reseted for - I'm Vishal");
// console.count("I'm Vishal");
// console.count("I'm Dhaval");


//TRACE Value
// const function1 = () => console.trace();
// const function2 = () => function1();
// function2();


//Time measurement
// const sum = () => console.log(`The sum of 2 and 3 is ${2 + 3}`);
// const multiply = () =>  console.log(`The multiply of 2 and 3 is ${2 * 3}`);
// const measureTime = () => {
//     console.time("sum()");
//     sum();
//     console.timeEnd("sum()");

//     console.time("multiply()");
//     multiply();
//     console.timeEnd("multiply()");
// };
// measureTime();


//Progressbar
const ProgressBar = require("progress");

const bar = new ProgressBar("downloading [:bar] :rate/bps :percent :etas", {
     total :20,
});

const timer = setInterval (() => {
    bar.tick();
    if(bar.complete){
        clearInterval(timer);
    }
},500);

const chalk = require ("chalk");
>>>>>>> e0c68d4332a73ab9a900e0d7a4edb9bc615ab17f
console.log(chalk.green("This colour is by chalk."));