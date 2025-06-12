//Error objects

const { customError } = require("./CustomError");

const error = new Error("Something went wrong!!");
//console.log(error.message);
//console.log(error.stack);

//throw new Error ("Its new error!");

const {CustomError} = require ("./CustomError");
// throw new CustomError ("This is new custom error!!"); 

//handle exception using try and catch
try{
    doSomething();
} catch(e){
    console.log("Eroor Occurred");
    console.log(e);
}

function doSomething() {
    console.log("i'm DoSomethingFunction");
}