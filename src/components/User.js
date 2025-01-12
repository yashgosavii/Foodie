import { useEffect, useState } from "react";

const User = (prop) => {
  const [userData, setUserData] = useState({
    avatar_url: "https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png",
    name: "User",
    location: "Location",
    login: "user@foodie.com",
  });

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch("https://api.github.com/users/yashgosavii");
      const response = await data.json();
      setUserData(response);
    }
    fetchData();
  }, [])
  
  const { name, location, login, avatar_url } = userData;
  return (
      <div className="user-card p-4 m-4 bg-gray-100 rounded-lg w-64">
      <img src={avatar_url} alt="user-image" className="w-28 rounded-full border border-black" />
      <p>Name: {name}</p>
      <p>Location: {location}</p>
      <p>Contact: {login + "@foodie.com"}</p>
    </div>
  );
};
export default User;