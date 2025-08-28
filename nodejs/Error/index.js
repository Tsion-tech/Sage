// const express = require("express")


// const app = express()


// app.use(express.json())


// let books = [
//     {id: 1, title:"Power", author: "Abebe Grima"},
//     {id:2, title: "From love upto death", author:"Addisalem"},
//     {id:3, title: "Oromay", author: "Bealu Grma"}
// ]


// app.get("/books",(req,res)=>{
//     res.status(200).json(books)
// })


// app.get("/books/:id", (req,res)=>{
//    const book = books.find((book)=>book.id == req.params.id)
//     if(book){
//         res.status(200).json(book)
//     }else{
//         res.status(404).json({
//   message: "book not found!"
//         })
//     }
// })


// app.post('/createBook',(req,res)=>{
//     const body = req.body
//     const book = {id: books.length + 1, title: body.title, author: body.author}
//     books.push(book)
//     res.status(200).json(book)
   
// })


// app.listen(2027, () => {
//     console.log("started")
// })



const express = require("express")


const app = express()




app.use((err, req, res, next) => {
    res.status(err.status || 500).json({
        message: err.message || "internal server error"
    })
})


app.get("/search", (req, res, next) => {
    try{
        res.status(200).send(req.query.keyWord.n.n)


    }catch(err){
        console.log("error happened!!")
        res.status(500).json({
            message: "internal server error"
        })
    }
   
})




app.listen(2017, () => {
    console.log("started")
})

