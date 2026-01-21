import React from "react";
import pic from '../src/assets/GoiJuly6.jpg'
function Comp(){
    return <>
    
    
    
   

        <div className="rootcomp">
            <div className="headline" style={{display: 'flex', flexDirection: 'column', gap: '12px', alignItems: 'flex-start'}}>
             <h1 style={{backgroundColor: "#C2185B", borderRadius: "12px", padding: "12px 24px"}}> Build Confidence </h1>
             <h1 style={{backgroundColor: "#C2185B", borderRadius: "12px", padding: "12px 24px"}}> Build Skills</h1>
             <h1 style={{backgroundColor: "#C2185B", borderRadius: "12px", padding: "12px 24px"}}> Get paid</h1>

            </div>
            <button style={{backgroundColor:"#C2185B", borderRadius: "12px", padding: "12px 24px", color: "white", border: "none", cursor: "pointer"}}>
             Get Started
            </button>
            
        </div>
        <img src={pic} alt="PHOTO" style={{height:"500px",width:"500px",marginLeft:"500px",marginBottom:"20px"}} />
     </>

}
export default Comp;