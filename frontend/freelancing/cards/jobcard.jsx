import React from "react";
import "./jobcard.css";
import { useNavigate } from "react-router-dom";

function Jobcard({ job }) {
  const navigate= useNavigate();
   function apply(){
    
    navigate("/chat")
   }

  return (
    <div className="job-card">
      <div className="job-header">
        <h3 className="job-title" title={job.title}>
          {job.title}
        </h3>
        <span className="job-type">{job.type}</span>
      </div>

      <p className="company-name">Posted by {job.createdby}</p>

      <p className="job-desc">{job.description}</p>

      <div className="skills">
        {job.skills.map((skill, index) => (
          <span style={{color:"black"}}  key={index}>{skill}</span>
        ))}
      </div>

      <div className="job-footer">
        <span className="budget">
          ₹{job.budgetMin} – ₹{job.budgetMax}
        </span>
        <button onClick={apply} className="apply-btn">Apply</button>
      </div>
    </div>
  );
}

export default Jobcard;
