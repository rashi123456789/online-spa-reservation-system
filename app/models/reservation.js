const mongoose=require('mongoose')
const validator= require('validator')
const Schema=mongoose.Schema
const reservationSchema=new Schema({
    name:{
        type:String,
        required:true,
        minlength:3
    },
    mobile:{
        type:String,
        required:true,
        minlength:10,
    },
    email:{
        type:String,
        required:true,
        unique:true,
        validate:{
            validator:function(value){
                return validator.isEmail(value)
            },
            message:function(){
                return 'invalid email format'
            }
        }
    },
    address:{
        type:String,
        required:true,
        minlength:10,
        maxlength:128
    },
    gender:{
        type:String,
        required:true,
    },
    date:{
        type:Date,
        required:true,
        validate:{
            validator:function(value){
                return value>=new Date()
            },
            message:function(){
                return 'date should not be less than today'
            }
        }
    },
    time:{
        type:String,
        required:true
    },
    user:{
        type:Schema.Types.ObjectId,
        ref:'User',
        required:true
    }
})
const Reservation=mongoose.model('Reservation',reservationSchema)
module.exports=Reservation