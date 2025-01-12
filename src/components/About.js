import User from "./User";
import UserClass from "./UserClass";
const About = () => {
  return (
    <div className="about">
      <h3>About Us</h3>
      <h2>Meet Our Team</h2>
      <div className="flex flex-wrap m-2 p-2 ">
      {[...Array(10)].map((_, i) => (
        <User key={i} />
      ))}
      </div>
    </div>
  );
};

export default About;
