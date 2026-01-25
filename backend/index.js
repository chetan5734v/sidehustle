const express= require("express");
const http= require("http");
const { mongo, default: mongoose } = require("mongoose");
const app= express();
const cors= require("cors");
const User=require("./models/user");
const jwt= require("jsonwebtoken");
const jwt_secret="chetanpandey";
const cookiepsarser= require("cookie-parser")
 app.use(cors({
    origin: "http://localhost:5173", // your frontend
  credentials: true
 }));
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
    const {username, password,isProfileCompleted}= req.body;
    try{
        if(!username || !password){
        return res.status(400).send("fill all the details")
    }
    const existingUser= await User.findOne({username});
    if(existingUser){
        return res.status(400).send("user already exists");
    }
    const newUser= new User({username, password ,isProfileCompleted});
    await newUser.save();
    res.status(201).send("user created successfully");  
    }
    catch(error){
        console.log(error);
    }


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
            userId:user._id
        },
        jwt_secret,
        {
            expiresIn:"1h"
        }

    );
    res.cookie("token",token,{
        httpOnly:true,
        secure:false,
        sameSite:"lax",
        maxAge:60*60*1000
    })
    res.status(200).json({
        message:"logged in successfully",
        isProfileCompleted:user.isProfileCompleted
    });
  }
  else{
    res.status(400).send("wrong password")
  }
  }
  catch(error){
    res.status(400).send(error.message);
  }

})
function AuthMiddleware(req,res,next){
 const token= req.cookies.token;
 if(!token){
   return res.send("login first");
 }
 try{
    const decoded= jwt.verify(token,jwt_secret);
    req.user=decoded;
    next();

 }
 catch(err){
  return  res.status(400).json({"message":"invalid token"});
 }

}


app.post("/updateprofile",AuthMiddleware, async (req,res)=>{

   try{
     const {title,bio,skills,hourlyrate,experience,name}= req.body;
    const userId= req.user.userId;
    await User.findByIdAndUpdate(
      userId,
      {
        $set: {
          "profile.name":name,
          "profile.title": title,
          "profile.bio": bio,
          "profile.skills": skills,
          "profile.experienceLevel": experience,
          "profile.hourlyRate": hourlyrate,
          isProfileCompleted: true
        }
      },
      { new: true }
    );
    res.json({isProfileCompleted:true});
   }
   catch(error){
    console.log(error.message)
   }

})

app.get("/profile",AuthMiddleware, async (req,res)=>{
 try{
  const id=req.user.userId;
  console.log(id);
 const user=  await User.findById(id).select("-password");
 if(!user){
   return res.status(404).send("user not found")
 }
 res.status(200).json(user);
 }
 catch(error){
  res.status(500).send("server error")
 }

}
)

app.listen(9000,()=>{
    console.log("server running on port 9000")
})


