import React from "react";
import Jobcard from "../cards/jobcard";
import { useNavigate } from 'react-router-dom';
function Jobs(){
    const navigate= useNavigate();
    function post(){
     
     navigate("/createjob")
    }
    return(
        <>
        <div style={{border:"solid grey 2px", display:"flex", justifyContent:"space-between"}}>
            <div style={{paddingLeft:"10px"}}>
                <h1>Freelancer</h1>
            </div>
            <div style={{ display:"flex"}}>
                 <form style={{paddingTop:"15px"}} >
                    <input style={{height:"10px"}} type="text" placeholder="Search..."  />
                 <button style={{height:"30px" , width:"50px"}} type="submit">Find</button>
                 </form>
                 </div>
           
        </div>
        <div className="job-container">
             <div><Jobcard/></div>
              <div><Jobcard/></div>
               <div><Jobcard/></div>
                <div><Jobcard/></div>
                 <div><Jobcard/></div>
                  <div><Jobcard/></div>

        </div>
        <div>
           <button onClick={post}>Post a job</button>
        </div>
       
        
        
        </>
        
         
    );
}
export default Jobs;