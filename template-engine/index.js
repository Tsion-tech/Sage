const express= require("express")

const app = express()

app.use(express.static("public"))

app.set("view engine","ejs")

app.get("/",(req,res)=>{
    res.render("Home",{name:"Tsion",isLogedIn:true})
})

app.listen(2019,()=>{
    console.log("started")
})
