const express = require("express")
const app = express()
app.use(express.json())


app.get("/send", (req, res) => {
    res.send("users <br/>list !!")
})

app.get("/json", (req, res) => {
res.status(200).json({
    name:"rahel",
    age:22,
})
})

app.get("/google", (req, res) => {
    res.status(200).json
    ({
        name:"tsion",
        age:20,
    })
})


app.listen(2018,() => {
    console.log("server started on https:??localhost:2018")
})