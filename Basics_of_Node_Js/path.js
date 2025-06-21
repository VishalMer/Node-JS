const path = require("path");
const filePath = "E:\\Projects\\Node JS\\Files\\Sample.txt";

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
// // fs.readFile(filePath, (err, data) => {
// fs.readFile(filePath, "utf-8", (err, data) => {
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
// const fileReading = async() => {
//   try {
//     const data = await fsPromise.readFile(filePath, {encoding:"utf-8"});
//     console.log("FS Promises : ", data);
//   }catch(err){
//     console.log(err);
//   }
// }

// fileReading();



// Writting in File
  const txtFile = path.join(__dirname, "Files", "Txt.txt");
  const content = "I'm writting in file..";

// fs.writeFile(txtFile, content, (err) => {
//   if (err) throw new Error("Something went wrong!!");
//   console.log("Write operation completesd successfully!");
//   fs.readFile(txtFile, "utf-8", (err, data) => {          //Reading the written file 
//     if(err) throw new Error(err);
//      console.log(data);
//     });
// });

// const writtingInFile = async() => { 
//   try{
//     // await fsPromise.writeFile(txtFile,"\n It's new line..",{            //creates a new line at the end
//     //   flag : "a+",
//     // });
//     await fsPromise.writeFile(txtFile,content);
//     await fsPromise.appendFile(txtFile, "\n This is a file apender.");  //Apends text in file
//     const data = await fs.promises.readFile(txtFile);
//     console.log(data.toString());
//   }catch(err){
//     console.log(err)
//   }
// };
// writtingInFile();



//Rename file
const renameFile = async() => { 
  try{
    await fsPromise.writeFile(txtFile,"\n New name given to the file.",{            //creates a new line at the end
      flag : "a+",
    });
    await fs.promises.rename(txtFile, path.join(__dirname,"Files","Txt1.text"));
    const data = await fs.promises.readFile(path.join(__dirname, "Files", "Txt1.text"));
    console.log(data.toString());
  }catch(err){
    console.log(err)
  }
};
 renameFile();