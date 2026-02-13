require("dotenv").config()
const connectDb=require("./src/config/db.js")
const app=require("./src/app.js")
connectDb()
app.listen(3000,()=>{
    console.log("Server running on port 3000 ");
})