const express=require('express')
const port=3001
const app=express()
const cors=require('cors')
const routes=require('./config/routes')
const configureDB=require('./config/database')
configureDB()
app.use(cors())
app.use(express.json())
app.use('/',routes)



app.listen(port,function(){
    console.log('listining on port',port)
})