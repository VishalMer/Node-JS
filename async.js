//sync
// console.log("Start");

// function sleep(milliseconds){
//     let startTime = new Date().getTime();
//     console.log("operation is running.");
//     while (new Date().getTime() < startTime + milliseconds){
//         console.log("In progress");
//     }
//     console.log("Operation is done.");
// }

// sleep(1000);
// console.log("do Something else...");


//async
console.log("Start");

function sleep(milliseconds){
    console.log("operation is running.");
    setTimeout(() => {
            console.log("Operation is done.");

    },milliseconds);
}

sleep(1000);
console.log("do Something else...");