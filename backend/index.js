const express= require("express")
const app=express()
const cors=require("cors")

app.use(cors())
var username="barath"
var password=1234

app.use(express.urlencoded({extended:true}))
app.get("/login", function(req,res)
{
    console.log(req.query.username)
    if(req.query.username===username && Number(req.query.password)=== password){
        res.send(true)
    }else{
        res.send(false)
    }
})
app.listen(5000, function(){
    console.log("server started....")
})