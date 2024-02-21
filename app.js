const express= require("express")
const app=express()
let PORT=5000
let sendMail=require("./controllers/sendMail")

app.get("/", (req,res)=>{
res.send("server")
})

app.get("/sendmail",sendMail)

const start= async()=>{
    try {
        
        app.listen(PORT,()=>{
            console.log(`port ${PORT}`);
        })
    } catch (error) {
        
    }
}

start()