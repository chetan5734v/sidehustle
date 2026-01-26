import React from "react";
import './jobcard.css'
function Jobcard(){
    return(
        <div class="job-card">
  <div class="job-header">
    <h3 class="job-title">Frontend Developer</h3>
    <span class="job-type">Remote</span>
  </div>

  <p class="company-name">StartupX Technologies</p>

  <p class="job-desc">
    Looking for a React developer to build responsive UI components.
  </p>

  <div class="skills">
    <span>React</span>
    <span>JavaScript</span>
    <span>CSS</span>
  </div>

  <div class="job-footer">
    <span class="budget">₹30,000 – ₹50,000</span>
    <button class="apply-btn">Apply</button>
  </div>
</div>

    );
}
export default Jobcard;