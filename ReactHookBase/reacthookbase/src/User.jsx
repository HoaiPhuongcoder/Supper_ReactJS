import React, { createContext, useEffect, useState } from "react";
import UserProfile from "./UserProfile";

const initialAddress = () => {
  return {
    nation: "VietNam",
    city: {
      street: "200 Dien Bien Phu, Da Nang",
      house: "Building",
    },
  };
};

export const UserContext = createContext();
function User() {
  const [firstName] = useState("Alex");
  const [age, setAge] = useState(20);
  const [address, setAddress] = useState(initialAddress);
  const [, forceRender] = useState();
  const handleIncreaseAge = () => {
    setAge((preAge) => preAge + 1);
  };
  const ChangeStreet = () => {
    // setAddress((prevAddress) => ({ ...prevAddress, city: "Ha Noi" }));
    setAddress((preAddress) => {
      const newCity = {
        ...preAddress.city,
      };
      newCity.street = "100 Dien Bien Phu, Da Nang";
      return {
        ...preAddress,
        city: newCity,
      };
    });
  };
  const rerender = () => forceRender((prevState) => prevState + 1);

  const getAddress = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          nation: "USA",
          city: {
            street: "100, Nicolas, NY",
            house: "Building",
          },
        });
      }, 3000);
    });
  };

  useEffect(() => {
    console.log("rerender");

    getAddress().then((res) => {
      setAddress(res);
    });
  }, []);
  return (
    <div>
      <h1>User Functional Component</h1>
      <UserContext.Provider
        value={{
          address,
          age,
          firstName,
          handleIncreaseAge,
        }}
      >
        <UserProfile />
      </UserContext.Provider>
      <button onClick={rerender}>Force Rerender</button>
      <button onClick={ChangeStreet}>Change City</button>
    </div>
  );
}

export default User;
