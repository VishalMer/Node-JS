const path = require("path");
const filePath = "E:\Projects\Node JS\Files\Sample.txt";

// //Dir Name
// console.log(path.dirname(filePath));
// //console.log(__dirname);

// //Base Name
// console.log(path.basename(filePath));
// //console.log(__filename);

// //Extension Name
// console.log(path.extname(filePath));

// const SampleFile = "Sample.txt";
// console.log(path.join(path.dirname(filePath), SampleFile));

const fs = require("fs");  //Filesystem
//console.log(fs); //Displays filesystem methods

//Reading from a file
// fs.readFile(filePath, (err, data) => {
fs.readFile(filePath, "utf-8", (err, data) => {
    if(err) throw new Error("Somehting went wrong!");
    console.log(data);
});
