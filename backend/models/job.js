import mongoose from "mongoose";
import jobDB from "../db/jobsdb.js";

const jobSchema = new mongoose.Schema({
  title: String,
  createdby: String,
  description: String,
  budgetMin: Number,
  budgetMax: Number,
  skills: [String],
  type: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default jobDB.model("Job", jobSchema);
