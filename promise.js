// const promise = new Promise((resolve, reject) => {{
//     console.log("Aync task execution");
//     throw "error!"; 
//     if (false) {
//         const person = { name : "Dipesh"};
//         resolve(person);
//     }else{
//         const error = { errorCode : "1001"};
//         reject(error);
//     }
// }});

const { times, values } = require("lodash")

// promise.then(
//     (val) => {
//         console.log(val);
//     },
//     // (err) => {
//     //     console.log(err);
//     // }
// ).catch((err) => console.log(err) )
// .finally(() => {
//     console.log("clean up");
// });



// let p = Promise.resolve("execution is done.");
// //let p = Promise.reject("execution is rejected.");

// p.then((val) => console.log(val));



// function asyncTask(){
//     return Promise.resolve();
// }

// asyncTask().then(() => console.log(name));
// const name = "Vishal";



// const p = Promise.reject("failed");

// p.then((Val) => {
//     console.log(val);
//     return "Done2"
// })

// .then((val) => {
//     console.log(val);
//     return "Done3"
// })
//     .then((val) => console.log(val))
//     .catch((val) => console.log(val));



const makeAPIcall = (time) => {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve("This API executed in " + time);
        }, time);
    });
};

let multiAPICall = [makeAPIcall(1000), makeAPIcall(500)];

Promise.all(multiAPICall).then((values) => {
    console.log(values);
});

Promise.race(multiAPICall).then((values) => {
    console.log(values);
});