// const {writeFile} = require("fs/promises")

// const bigFiles = async ()=>{
//     await writeFile("./data/bigFile.txt" , "Hola mundo hola mundo hola mundo".repeat(1000000));
// }

const {createReadStream} = require("fs");
const { serialize } = require("v8");

const stream = createReadStream("./data/bigFile.txt" , 'utf-8');


stream.on('data' , (chunk)=> {
    console.log(chunk);
})


// bigFiles();