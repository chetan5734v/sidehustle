import { useState } from "react";
import axios from "axios";

function CreateJob() {
  const [form, setForm] = useState({
    title: "",
    type: "Remote",
    budgetMin: "",
    budgetMax: "",
    description: "",
    skills: "",
  });

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    const payload = {
      ...form,
      skills: form.skills.split(",").map(s => s.trim()),
    };

    try {
      await axios.post("http://localhost:9000/createjob", payload, {
        withCredentials: true,
      });
      alert("✅ Job created successfully");
    } catch (err) {
        console.log(err)
      alert("❌ Failed to create job");
    }
  }

  return (
    <form className="job-form" onSubmit={handleSubmit}>
      <h2>Create Job</h2>

      <input name="title" placeholder="Job Title" onChange={handleChange} required />
      
      <select name="type" onChange={handleChange}>
        <option>Remote</option>
        <option>Onsite</option>
        <option>Hybrid</option>
      </select>

      <div className="budget">
        <input name="budgetMin" placeholder="Min Budget" type="number" onChange={handleChange} />
        <input name="budgetMax" placeholder="Max Budget" type="number" onChange={handleChange} />
      </div>

      <textarea
        name="description"
        placeholder="Job Description"
        rows="4"
        onChange={handleChange}
      />

      <input
        name="skills"
        placeholder="Skills (React, JS, CSS)"
        onChange={handleChange}
      />

      <button type="submit">Create Job</button>
    </form>
  );
}

export default CreateJob;
