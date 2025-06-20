// const userLogin = () => {
//     console.log("Enter username and password.");
//     let username = prompt("Enter username :");
//     let password = prompt("Enter password: ");

const { values } = require("lodash");

//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("Performing user Authentication");
//              if(username === "vishal" && password ==="123"){
//                 resolve("User Authenticated!");
//              }else{
//                 reject("User Authentication Failed!");
//              }
//         }, 1000);
//     });
// };

// function goToHomePage(userAuthStatus){
//     return Promise.resolve(`GO to home page as : ${userAuthStatus}`);
// }

// // userLogin()
// //     .then((response) => {
// //         console.log("validated User");
// //         return goToHomePage(response)
// //     })
// //     .then((userAuthStatus) => {
// //         console.log(userAuthStatus);
// //     }).catch((err) => {
// //         console.log(err);
// //     });


// // In async await way
// async function performTask(){
//     try{
//         const response = await userLogin();
//         console.log("Validated User");
//         const userAuthStatus = await goToHomePage(response);
//         console.log(userAuthStatus);
//     }catch(err){
//         console.log(err)
//     } 
// }

// performTask();



// Performance Promises VS Async wait
const makeApiCall = (time) => {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve("This API executed in : " +time);
        }, time);
    });
};

const apiRequests = [makeApiCall(1000), makeApiCall(2000), makeApiCall(500)];

// Promise.all(apiRequests).then((values) => {
//     console.log(values);
// });

(async function () {
    for (let request of apiRequests){
        console.log(await request());
    }
})(); 