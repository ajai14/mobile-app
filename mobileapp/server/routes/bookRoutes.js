const controller=require("../controller/bookController")
const express=require('express')
const validatetoken = require("../middleware/validatetokenhandler")
const book_router=express.Router()

book_router.post("/create-booking",validatetoken,controller.create_booking)

module.exports=book_router
