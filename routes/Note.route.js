const express=require("express")
const noteRouter=express.Router()
const {NoteModel}=require("./models/Note.model")


noteRouter.get("/",(req,res)=>{
    res.send("All the notes")
})

noteRouter.post("/create",async(req,res)=>{
    const payload=req.body
    try{
        const new_note=new NoteModel(payload)
        await new_note.save()
        res.send(("created the note"))

    }catch{
        console.log(err)
        res.send({"msg":"Something went wrong"})
        
    }
    res.send("created the note")
})

noteRouter.patch("/update/:id",(req,res)=>{
    const payload=req.body
    res.send("updatedted the note")
})

noteRouter.delete("/delete/:id",(req,res)=>{
    const payload=req.body
    res.send("deleted the note")
})












module.exports={
    noteRouter
}