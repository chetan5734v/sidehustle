import axios from 'axios';
import react from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
function Profileform(){
    const [title,setTitle]=useState("");
    const [name,setName]=useState("");
    const [bio,setBio]=useState("");
    const [skills,setSkills]=useState("");
    const [hourlyrate,setHourlyrate]=useState("");
    const [exp,setExp]=useState("");
    const skillsArray = skills
  .split(",")                 // split by comma
  .map(skill => skill.trim()) // remove spaces
  .filter(skill => skill);  
  const navigate= useNavigate();
 async function  handleupdate (e){
      e.preventDefault();
      try{
        
        await axios.post("http://localhost:9000/updateprofile",{
          title:title,
          bio:bio,
          skills:skillsArray,
          experienceLevel:exp,
          hourlyRate:hourlyrate,
          name:name
        },{withCredentials:true})
        navigate("/profilepage")
      }
      catch(error){
        console.log(error.message)
      }
  }

    
    return (
        <div>
          <h1>hello user</h1>
          <form onSubmit={handleupdate}>
            <label >Name</label> <br />
            <input type="text"  value={name} onChange={(e)=>{setName(e.target.value)}} required /> <br />
            <label >Title</label> <br />
            <input type="text" value={title} onChange={(e)=>{setTitle(e.target.value)}} required/> <br />
            <label >Bio</label> <br />
            <input type="text" value={bio} onChange={(e)=>{setBio(e.target.value)}} required/> <br />
            <label >Skills</label> <br />
            <input type="text" value={skills} onChange={(e)=>{setSkills(e.target.value)}} required/> <br />
            <label >Hourly Rate</label> <br />
            <input type="text" placeholder='INR' value={hourlyrate} onChange={(e)=>{setHourlyrate(e.target.value)}} required/> <br />
            <label >Experience</label> <br />
            <input type="text" value={exp} placeholder='Expert | Intermediate | Beginner ' onChange={(e)=>{setExp(e.target.value)}} required/> 
            <button type='Submit'> Save</button>
          </form>
         


        </div>
    );
}
export default Profileform;