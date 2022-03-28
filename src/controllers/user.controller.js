const express = require("express")

// const User = require("../models/user.model")
// const authenticate = require("../middlewares/authenticate")

const router = express.Router()

// router.post("/register",authenticate,async (req,res)=>{
//     try{
//    const user = await User.create(req.body)
   
//    return res.status(201).send(user)
//     }catch(err){
//         res.status(500).send({msg :err.msg})
//     }
// })

// router.post("/login",authenticate,async (req,res)=>{
//     try{
//    const user = await User.find().lean().exec()
   
//    return res.status(201).send(user)
//     }catch(err){
//         res.status(500).send({msg :err.msg})
//     }
// })

module.exports = router