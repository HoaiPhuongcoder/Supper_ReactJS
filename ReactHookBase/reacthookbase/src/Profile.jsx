import React, { useContext } from "react";
import { UserContext } from "./User.jsx";

function Profile() {
  const { firstName, age, address } = useContext(UserContext);
  return (
    <ul>
      <li>First Name: {firstName}</li>
      <li>Age: {age}</li>
      <li>Nation: {address.nation}</li>
      <li>City: {address.city.street}</li>
      <li>House: {address.city.house}</li>
    </ul>
  );
}

export default Profile;
