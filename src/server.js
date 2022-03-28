const app = require("./index")

const connect = require("./configs/db")

app.listen(4400, async(req,res)=>{
    try{
  await connect()
  console.log("listening 4400 port")
    }catch(err){
        console.error({msg: err.msg})
    }
})