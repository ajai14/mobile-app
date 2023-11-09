const mongoose=require('mongoose')
const bookSchema= new mongoose.Schema({
    user_id:String,
    card_name:String,
    card_number:Number,
    cvv:Number,
    expairy_date:Date,
    car_name:String,
    car_id:String
    
})
module.exports=mongoose.model("booking",bookSchema)