import { useState } from "react";

const User = (prop) => {
  const [count, setCount] = useState(0);
  return (
    <div className="user-card">
        <h1>Count = {count} </h1>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png"
        alt="user-image"
        className="user-image"
      />
      <p>Name : {prop.name}</p>
      <p>Location : {prop.location}</p>
      <p>Contact : {prop.contact}</p>
      <p>Role : {prop.role}</p>

      {/* <button onClick={() => setCount(count + 1)}>Increment</button> */}
    </div>
  );
};
export default User;

// Functional Component is a simple JavaScript function that returns JSX.
