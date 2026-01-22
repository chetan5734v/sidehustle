const mongoose= require("mongoose");

const userSchema= new mongoose.Schema({
    username:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true
    },
    profile:{
    title: String,
    bio: String,
    skills: [String],
    experienceLevel: String,
    hourlyRate: Number,
    
    },
    isProfileCompleted:Boolean,
    createdAT:Date,
    updatedAt:Date
   
})
module.exports= mongoose.model("User", userSchema);