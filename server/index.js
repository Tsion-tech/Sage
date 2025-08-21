// const fs = require('fs')
// fs.readFile('output.txt','utf8',(err,data) => {
//     if (err) throw err
//     console.log(data)
    
// }) 

// fs.writeFile("output.csv","name,age,gender", (err) => {
//     if (err) throw err
//     console.log("completed")
// })


import  fs from 'fs'
fs.readFile('output.txt', 'utf8', (err, data) => {
    if (err) throw err;
    console.log("file output:", data);
});

