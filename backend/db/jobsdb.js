import {mongoose} from "mongoose"

const jobDB = mongoose.createConnection(
  "mongodb://localhost:27017/jobs"
  
);

jobDB.on("connected", () => {
  console.log("✅ Jobs DB connected");
});

export default jobDB;
