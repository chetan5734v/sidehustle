import { useEffect, useState } from "react";
import axios from "axios";

function ProfilePage() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    axios.get("http://localhost:9000/profile", {
      withCredentials: true
    })
    .then(res => {
      setUser(res.data);
    })
    .catch(err => {
      console.error(err);
    });
  }, []);

  if (!user) return <p>Loading...</p>;

  return (
    <div>
      <h2>Hello {user.username}</h2>
      <p><b>Title:</b> {user.profile.title}</p>
      <p><b>Bio:</b> {user.profile.bio}</p>
      <p><b>Skills:</b> {user.profile.skills.join(", ")}</p>
      <p><b>Hourly Rate:</b> ₹{user.profile.hourlyRate}</p>
    </div>
  );
}

export default ProfilePage;
