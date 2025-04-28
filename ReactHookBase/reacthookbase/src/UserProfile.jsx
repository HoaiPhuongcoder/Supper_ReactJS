import React, { useContext } from "react";
import Profile from "./Profile.jsx";
import { UserContext } from "./User.jsx";
function UserProfile() {
  const { handleIncreaseAge } = useContext(UserContext);
  return (
    <div>
      <Profile />
      <button onClick={handleIncreaseAge}>Increase Age</button>
    </div>
  );
}

export default UserProfile;
