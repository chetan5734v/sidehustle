import React from "react";
import {Link} from 'react-router-dom'
function Navbar({t1 ,t2 ,t3}){
    return (
<div className="navbar">
      <ul className="navi">
        <li>
           
           <Link to="/signin" className="link">Signin</Link>
           
        </li>
        <li>
           <Link  className="link" to="/signup">Signup</Link>   
        </li>
        <li>
           <Link className="link" to="#">about</Link>
        </li>
    </ul>
        
        </div>
    );
    
    
    
}
export default Navbar;