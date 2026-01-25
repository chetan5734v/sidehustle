import React from "react";

function Jobs(){
    return(
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
    );
}
export default Jobs;