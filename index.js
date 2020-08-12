const express=require('express')
const port= process.env.PORT||3001
const app=express()
const cors=require('cors')
const routes=require('./config/routes')
const path=require('path')
const configureDB=require('./config/database')
configureDB()
app.use(cors())
app.use(express.json())
app.use('/',routes)
app.use(express.static(path.join(__dirname,"client/build")))
app.get("*",(req,res) => {
res.sendFile(path.join(__dirname + "/client/build/index.html"))
})



app.listen(port,function(){
    console.log('listining on port',port)
})