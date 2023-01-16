const mongoose=require("mongoose")
const noteSchema=mongoose.Schema({
    title:String,
    body:String,
    device:String
})

const NoteModel=mongoose.model("note",noteSchema)

module.exports={
    NoteModel
}