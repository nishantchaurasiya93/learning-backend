const express=require("express")
const app=express()
const NoteModel=require("./models/note.model")
app.use(express.json())
app.post("/notes",async(req,res)=>{
    const{  title , description}=req.body
    const note=await NoteModel.create({
          title,
        description
    })

    res.status(201).json({
        message:"Note created successfully",
        note
    })
})
app.get("/notes",async(req,res)=>{
    const notes=await NoteModel.find()
    res.status(200).json({
        message:"Notes fetching successful",
        notes
    })
})
module.exports=app