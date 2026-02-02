import React, { useEffect, useState } from "react";
import Jobcard from "../cards/jobcard";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Jobs() {
  const navigate = useNavigate();
  const [jobs, setJobs] = useState([]);

  function post() {
    navigate("/createjob");
  }

  useEffect(() => {
    async function getJobs() {
      try {
        const res = await axios.get("http://localhost:9000/alljobs");
        setJobs(res.data);
      } catch (error) {
        alert("Something went wrong while fetching jobs");
        console.error(error);
      }
    }
    getJobs();
  }, []);

  return (
    <>
      {/* Header */}
      <div
        style={{
          border: "2px solid grey",
          display: "flex",
          justifyContent: "space-between",
          padding: "0 20px",
          alignItems: "center",
        }}
      >
        <h1>Freelancer</h1>

        <form>
          <input
            type="text"
            placeholder="Search..."
            style={{ height: "30px", marginRight: "6px" }}
          />
          <button type="submit" style={{ height: "34px" }}>
            Find
          </button>
        </form>
      </div>

      {/* Job cards */}
      <div className="job-container">
        {jobs.map((job) => (
          <Jobcard key={job._id} job={job} />
        ))}
      </div>

      {/* Post Job */}
      <div style={{ textAlign: "center", margin: "20px" }}>
        <button onClick={post}>Post a job</button>
      </div>
    </>
  );
}

export default Jobs;
