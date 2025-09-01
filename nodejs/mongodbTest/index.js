const express = require('express');
const mongoose = require('mongoose');
const app = express();

app.use(express.json())

mongoose.connect("mongodb+srv://Tsiony:tsionyeshetila@@977@cluster0.huwneam.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
.then(()=>console.log("MongoDB connected"))
.catch(err => console.log(err))

const bookSchema = new mongoose.Schema({
        title: {type:String,required:true},
        author:{type:String,required:true},
        page:{type:Number,min:0}
})

const Bookmodel = mongoose.model("Book", bookschema);

app.post ("/books",async (req, res) => {
    const book=new Bookmodel(req.body)
    await book.save()
    res.status(200).json(book)
})

app.get ("/books",async (req, res) => {

const books=await Bookmodel.find()
res.status(200).json(books)
    })


app.listen(4080, () => {
    console.log("Server is running on port 4080");
})