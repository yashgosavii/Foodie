// import User from "./User";
import UserClass from "./UserClass";
const About = () => {
  return (
    <div className="about">
      <h3>About Us</h3>
      <h2>Meet Our Team</h2>
      {/* functional component */}
      {/* <User
        name="Yash (Function)"
        location="Aurangabad"
        role="Software Developer"
        contact="yash@foodie.in"
      /> */}
      {/* class based component */}
      <UserClass 
        name="Yash (Class)" location="Aurangabad" role="Software Developer" contact="yash@foodie.in"
      />
    </div>
  );
};

export default About;
