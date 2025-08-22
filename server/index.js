// const fs = require('fs')
// fs.readFile('output.txt','utf8',(err,data) => {
//     if (err) throw err
//     console.log(data)
    
// }) 

// fs.writeFile("output.csv","name,age,gender", (err) => {
//     if (err) throw err
//     console.log("completed")
// })

// import fs from 'fs';


fs.readFile("output.txt",'utf8',(err,data)=>{
  if(err) throw err
  console.log(data)
})


fs.writeFile("writeFileExample.csv","name,age,gender",(err)=>{
  if(err) throw err
  console.log("completed")
})


// Creating a Simple HTTP Server
import http from 'http'


const server = http.createServer((req,res)=>{
  res.writeHead(200,{'content-type':"text/plain"})
  res.end("hello from node server!!!!")
})


server.listen(7000,()=>{
  console.log("server started!");
})



// Asynchronous Programming
import fs from 'fs'


//Callbacks
fs.readFile("output.txt","utf8",(err,data)=>{
  if(err) throw err
  console.log("file output: ",data)
})


//Promises
fetch("https://jsonplaceholder.typicode.com/posts/1")
.then((res)=>res.json())
.then((data)=>console.log("fetch data: ", data))


//Async/Await
async function getPost(){
  console.log("function started")
  console.log("from function")
  const res =  await fetch("https://jsonplaceholder.typicode.com/posts/1")
  console.log("function end")
}
getPost()
console.log("out of all ")

