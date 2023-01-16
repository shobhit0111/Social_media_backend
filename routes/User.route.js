const express=require("express")
const{UserModel}=require("../models/User.model")
const bcrypt=require("bcrypt")

const jwt=require("jsonwebtoken")

const userRouter=express.Router()





userRouter.post("/register",async(req,res)=>{
    const {email,password,name,gender}=req.body
    try{
        bcrypt.hash(password, 5 ,async (err, secure_password)=> {
            if(err){
                console.log(err)

            }else{
                const user=new UserModel( {name,email,gender,pass:secure_password})

                await user.save()
                res.send("Registered")

            }

            
        });
        

    }catch(err){
        res.send("Error in registering the user")
        console.log(err)

    }
   
})

userRouter.post("/login",async(req,res)=>{
    const{email,pass}=req.body
    try{
        const user=await UserModel.find({email})
        const hashed_password=user[0].password
        
        
        if(user.length>0){
            bcrypt.compare(password, hashed_password, (err, result)=> {
                if(result){
                    const token = jwt.sign({ cousre: 'backend' }, 'masai');
                    res.send({"msg":"Login successfull","token":token})

                }else{
                    res.send("Wrong Credentials")

                }
            });
           
           

        }else{
            res.send("Wrong Credentials")
        }
        

    }catch{
        res.send("Something went wrong")
        console.log(err)


    }
    res.send("Logged in")
})


module.exports={
    userRouter
}