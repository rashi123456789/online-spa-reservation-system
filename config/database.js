const mongoose=require('mongoose')
const CONNECTION_URI= 'mongodb://localhost:27017/online-spa-reservation-portal'
const confogureDB=()=>{
    mongoose.connect(CONNECTION_URI,{useNewUrlParser:true,useUnifiedTopology:true,useCreateIndex:true})
        .then(()=>{
            console.log('connected to db')
        })
        .catch((err)=>{
            console.log(err)
        })
}
module.exports=confogureDB