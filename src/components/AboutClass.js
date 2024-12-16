import React from "react";
import UserClass from "./UserClass";

class AboutClass extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    console.log("About Class Component Did Mount");
  }
  componentDidUpdate() {
    console.log("About Class Component Did Update");
  }
  componentWillUnmount() {
    console.log("About Class Component Will Unmount");
  }
  render() {
    return (
      <div className="about">
        <h3>About (Class)</h3>
        <h2>Meet Our Team</h2>
        {/* functional component */}
        {/* <User
                name="Yash (Function)"
                location="Aurangabad"
                role="Software Developer"
                contact="yash@foodie.in"
              /> */}
        {/* class based component */}
        <div className="team">

          <UserClass
            name="User"
            location="Location"
            contact="user@foodie.in"
          /> 
        </div>
      </div>
    );
  }
}

export default AboutClass;
 