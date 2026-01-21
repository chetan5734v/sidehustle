import { useState } from "react";
import axios from 'axios'
import { useNavigate } from "react-router-dom";

function Signin() {
    const [username,setUsername]=useState("");
    const [password,setPassword]=useState("");
    const navigate= useNavigate();
   async function handlesignin(e){
        e.preventDefault();
        try{
          await  axios.post("http://localhost:9000/login" , {
        username:username,
        password:password
        });
        navigate("/profile")
        }
        catch(error){
            alert("something went wrong");
        }
            
        
    }
    


  return (
    <div className="signin-container">
      <h2>Sign In</h2>

      <form onSubmit={handlesignin}>
        <div>
          <label>Username</label><br />
          <input type="text"  onChange={(e)=>setUsername(e.target.value)}/>
        </div>

        <div>
          <label>Password</label><br />
          <input type="password"  onChange={(e)=>setPassword(e.target.value)}/>
        </div>

        <button  type="submit">Login</button>
      </form>
    </div>
  );
}

export default Signin;
