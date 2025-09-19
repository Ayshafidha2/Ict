//import
const express = require("express")
require("./connection")
var stdmodel = require("./models/student")
var cors = require('cors')

//initialise
const app = express()
//mid
app.use(express.json())
app.use(cors())

//api create
app.get("/", (req, res) => {
    res.send("hello ")
})

// add api
app.post("/add", async (req, res) => {
    try {
        await stdmodel(req.body).save()
        res.send("data added")
    } catch (error) {
        console.log(error)
        
    }
})
app.get("/view", async (req, res) => {
    try {
        const  val=await stdmodel.find()
        res.send(val)
          
        }
    catch (error) {
        console.log(error)
        }
    }
)
//delete findBYIdAndDelete
app.delete("/remove/:id", async (req, res) => {
    try {
        await stdmodel.findByIdAndDelete(req.params.id)
        res.send("data deleted")
    }
    catch (error) {
        console.log(error)
    }
    }
    )
//update findByIdAndUpdate
app.put("/update/:id", async (req, res) => {
    try {
        await stdmodel.findByIdAndUpdate(req.params.id, req.body)
        res.send("data updated")
    }
    catch (error) {
        console.log(error)
    }
            

    
})
//port setting
app.listen(3005, () => {
    console.log("server is running on port 3005")
})