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

  //Filesystem
//console.log(fs); //Displays filesystem methods

//Reading from a file - Async
const fs = require("fs");
//  fs.readFile(filePath, (err, data) => {
// //fs.readFile(filePath, "utf-8", (err, data) => {
//     if(err) throw new Error("Somehting went wrong!");
//     console.log(data);
// });

// try{
//   const data = fs.readFileSync(path.join(__dirname, "Files", "Sample.txt"),"utf-8");
//   console.log(data);
// }catch(err){
//   console.log(err);
// }


const fsPromise = require("fs").promises;
const fileReading = async() => {
  try {
    const data = await fsPromise.readFile(filePath, {encoding:"utf-8"});
    console.log("FS Promises : ", data);
  }catch(err){
    console.log(err);
  }
}

fileReading();
