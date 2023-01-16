const express=require("express")
const{connection}=require("./configs/db")

const{userRouter}=require("./routes/User.route")
const{noteRouter}=require("./routes/Note.route")
const{authenticate}=require("./middleware/authenticate.middleware")

const app=express()
app.use(express.json())

app.get("/",(req,res)=>{
    res.send("Home Page")
})

app.use("/users",userRouter)
app.use()
app.use("/notes",noteRouter)


app.get("/posts",(req,res)=>{
    const token=req.headers.authorization
    console.log(token)
    jwt.verify(token, 'masai', (err,decoded)=> {
        if(err){
            res.send("Invalid token")
            console.log(err)
        }else{
            res.send("Posts Page")
        }
    
      });
})





app.listen(7070,async()=>{
    try{
        await connection
        console.log("Connected to the DB")

    }catch(err){
        console.log("Trouble connecting to the DB")
        console.log(err)


    }
    console.log("running at 7070")
})