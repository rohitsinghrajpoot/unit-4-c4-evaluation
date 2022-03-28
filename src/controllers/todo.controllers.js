const express = require("express")

const Todo= require("../models/todo.models")
const authenticate = require("../middlewares/authenticate")
const router = express.Router()

router.get("",authenticate,async (req,res)=>{
    try{
  const todos = await Todo.find().populate("userid").lean().exec()

  return res.status(200).send(todos)
    }catch(err){
    res.status(500).send({msg:err.msg})
    }
})

router.post("",authenticate,async (req,res)=>{
  req.body.userid = req.userID

    try{
  const todo = await Todo.create(req.body).populate("userid")

  return res.status(201).send(todo)
    }catch(err){
    res.status(500).send({msg:err.msg})
    }
})

router.get("/:id",authenticate,async (req,res)=>{
    try{
  const todo = await Todo.findById(req.params.id).populate("userid").lean().exec()

  return res.status(200).send(todo)
    }catch(err){
    res.status(401).send({msg:err.msg})
    }
})

router.patch("/:id",authenticate,async (req,res)=>{
    try{
  const todo = await Todo.findByIdAndUpdate(req.params.id,req.body,{new:true}).populate("userid")

  return res.status(200).send(todo)
    }catch(err){
    res.status(401).send({msg:err.msg})
    }
})

router.delete("/:id",authenticate,async (req,res)=>{
    try{
  const todo = await Todo.findByIdAndDelete(req.params.id)

  return res.status(200).send(todo)
    }catch(err){
    res.status(401).send({msg:err.msg})
    }
})

module.exports = router