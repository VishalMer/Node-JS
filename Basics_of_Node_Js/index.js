// console.log("This is a Nodejs practice.");
// console.log("This is first tutorial on Nodejs.");
// console.log("Hello i'm Vishal Mer");

//process.exit(1);
//process.exitCode = 1; // 0 will do a programatic exit, 1 will do crash the app

//const _ = require ("lodash");
//const arr = [1,4,6,8];
//console.log(_.last(arr));
//console.log(_.chunk(arr));

const cowsay =require("cowsay");
console.log(
    cowsay.say({
        text:"Im Learning Node JS!",
        e: "00",
        t: "U",
    })
);

// const {car} = require("./car");
// console.log(car);
//console.log(JSON.stringify(car, null, 1));