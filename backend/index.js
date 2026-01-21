const express= require("express");
const http= require("http");
const { mongo, default: mongoose } = require("mongoose");
const app= express();
const cors= require("cors");
const User=require("./models/user");
const jwt= require("jsonwebtoken");
const jwt_secret="chetanpandey";
const cookiepsarser= require("cookie-parser")
 app.use(cors());
app.use(express.json());
app.use(cookiepsarser());

mongoose.connect('mongodb://localhost:27017/usersDB').then
(()=>{
    console.log("connected to mongoDB");
}).catch((err)=>{
    console.log("error connecting to mongoDB", err);
});


app.get('/',(req,res)=>{
    res.send("hello from server");
})

app.post('/signup', async (req,res)=>{
    const {username, password}= req.body;
    if(!username || !password){
        return res.status(400).send("fill all the details")
    }
    const existingUser= await User.findOne({username});
    if(existingUser){
        return res.status(400).send("user already exists");
    }
    const newUser= new User({username, password});
    await newUser.save();
    res.status(201).send("user created successfully");  


});

app.post('/login', async(req,res)=>{
  const {username,password}= req.body;
  try{
    if(!username || !password){
        return res.status(400).send("fill all the details")
    }
  const user= await User.findOne({username});
  if(user.password==password){
    
   const token=  jwt.sign(
        {
            userId:username
        },
        jwt_secret,
        {
            expiresIn:"1h"
        }

    );
    res.cookie("token",token,{
        httpOnly:true,
        secure:true,
        sameSite:"strict",
        maxAge:60*60*1000
    })
    res.status(200).send("logged in successfully");
  }
  else{
    res.status(400).send("wrong password")
  }
  }
  catch(error){
    res.status(400).send(error.message);
  }

})
function AuthMiddlewarr(req,res,next){
 const token= res.cookie.token;
 if(!token){
    res.send("login first");
 }
 try{
    const decoded= jwt.verify(token,jwt_secret);
    req.user=decoded;
    next();

 }
 catch(err){
    res.status(400).json({"message":"invalid token"});
 }

}







app.listen(9000,()=>{
    console.log("server running on port 9000")
})


