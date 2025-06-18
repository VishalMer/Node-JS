//callback & callback hell

// //Sync callback
// console.log("Task Started");
// function asyncTask(cb){
//     console.log("Task Running");
//     cb();
// }

// //asyncTask(() => console.log("Vishal"));
// asyncTask(() => console.log(name));
// console.log("Task Ended.");
// const name = "Vishal";


// //Async callback
// console.log("Task Started");
// function asyncTask(cb){
//     console.log("Task Running");
//     setTimeout(cb,0);
// }

// //asyncTask(() => console.log("Vishal"));
// asyncTask(() => console.log(name));
// console.log("Task Ended.");
// const name = "Vishal";


function asyncTask(cb){
    setTimeout(() => {
        cb(null, "Thsi is data from server!");
    }, 0);
}

asyncTask((err, data) => {
    if (err){
        throw err;
    }else{
        console.log("Data : ", data);
    }
});


function makeAPIcall(cb){
    setTimeout(() => {
        console.log("Thsi is async task execution!");
    }, 0);
}


// callback hell - This nesty syntax is called callback hell. ( Suggestion : use Promises instead)
makeAPIcall(() => {
    makeAPIcall(() => {
        asyncTask(() => {
            asyncTask(() => {
                asyncTask(() => {
                    asyncTask(() => {

                    })
                })
            })
        })
    })
})