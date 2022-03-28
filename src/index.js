const express =require("express")

const userController = require("./controllers/user.controller")
const todoController = require("./controllers/todo.controllers")
const {register,login}= require("./controllers/auth.controllers")
const app = express()
app.use(express.json())

//app.use("/users",userController)
app.post("/register",register)
app.post("/login",login)
app.use("/todos",todoController)

module.exports= app