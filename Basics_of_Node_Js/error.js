//Error objects

const error = new Error("Something went wrong!!");
const { reject } = require("lodash");
//console.log(error.message);
//console.log(error.stack);
//throw new Error ("Its new error!");

const {CustomError} = require ("./CustomError");
// throw new CustomError ("This is new custom error!!"); 

//handle exception using try and catch
// try{
//     doSomething();
// } catch(e){
//     console.log("Eroor Occurred");
//     console.log(e);
// }

function doSomething() {
    //const data = fetch("localhost:300/api");
    console.log("i'm DoSomethingFunction");
    const data = "i'm DoSomethingFunction";
    return data;
}

//Uncaught Exception
// process.on("UncaughtException", (error) => {
//     console.log("There was an uncaught error!!");
//     process.exit(1);
// });

//doSomething();

// const promise = new Promise((resolve, reject) => {
//     if(false){
//         resolve(doSomething());
//     } else {
//         reject(doSomething());
//     }
// });

// promise.then((val) => {
//     console.log(val);
// }).catch((err) => {
//     console.log("Error Occurred!");
// });


// Exception with ASync and Await
const someFunction = async () => {
    try {
        await doSomething();
    }catch(err) {
        throw new CustomError(err.message);
    }
};

someFunction();