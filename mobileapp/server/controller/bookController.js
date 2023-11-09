const express=require('express')
const app=express()
const schema = require('../model/bookSchema')


 exports.create_booking= async (req,res)=>{
   let payload=req.body
    try{

       
        let find_prev=await schema.find()

        payload.car_id=`car-${find_prev.length+1}`
       

        console.log("payload",payload);

         await schema.create(payload)
    .then((user)=>{
          
      return  res.json({message:"booking created successfully",user})
    })
    .catch(err=>{
        return res.json({
            message:'error while booking order',err
        })
    })
}
    

    catch(error){
        console.log(error)
        return error
    }

 }









