import { useState } from "react";
import axios from 'axios'
import { useNavigate } from "react-router-dom";
function Signup() {
const [username,setUsername]=useState("");
    const [password,setPassword]=useState("");
    const navigate= useNavigate();
   async function handlesignup(e){
        e.preventDefault();
        try{
          await  axios.post("http://localhost:9000/signup" , {
        username:username,
        password:password,
        isProfileCompleted:false
        });
        navigate("/signin")
        }
        catch(error){
            alert("something went wrong");
        }
            
        
    }


  return (


    <div className="signin-container">
      <h2>Sign Up</h2>

      <form onSubmit={handlesignup}>
        <div>
          <label>Username</label><br />
          <input type="text"  onChange={(e)=>{setUsername(e.target.value)}}/>
        </div>

        <div>
          <label>Password</label><br />
          <input type="password"  onChange={(e)=>{setPassword(e.target.value)}}/>
        </div>

        <button type="submit">Signup</button>
      </form>
    </div>
  );
}

export default Signup;
