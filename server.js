const express=require("express")
const app=express()


app.use(express.json())



let users=[]

app.get("/",(req,res)=>{
    res.send("working")
})

app.post("/signup",(req,res)=>{

    try{
    const {Username,Email,Password,DateOfBirth}=req.body

    if(!Username){
        return res.status(400).json({error:"Username cannot be empty"})
    }
    if(!Email){
        return res.status(400).json({error:"Email cannot be empty"})
    }
    if(!Password || Password.length<8 || Password.length>16){
        return res.status(400).json({error:"Password length should be greater than 8 or less than or equal to 16"})
    }
 

    const newUser={Username,Email,Password,DateOfBirth}
    users.push(newUser)

    res.status(200).json({message:"New account created Successfully",data:users})
    }catch(Error){
        return req.status(500).json({error:"Internal Server error"})
    }



})


app.listen(process.env.PORT,()=>{
    console.log("server is running")
})