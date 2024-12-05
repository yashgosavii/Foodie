import React from "react";

class UserClass extends React.Component {
    constructor(props) {
        super(props);
        this.state =  {
            userInfo : {
              avatar_url : "https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png",
              name : "User",
              location : "Location",
              login : "user@foodie.com",
            }
        }
    }

  async componentDidMount () {
    // API call
    const data = await fetch("https://api.github.com/users/yashgosavii");
    const response = await data.json();
    // updating state
    this.setState({
      userInfo : response
    })
  }

  componentDidUpdate() {
    console.log("User Class Component Did Update");
  }

  componentWillUnmount() {
    console.log("User Class Component Will Unmount");
  }
  render() {
    const { name, location, login, avatar_url} = this.state.userInfo;
    return (
      <div className="user-card">
        {/* <p>Count = {count} </p> */}
        {/* <button onClick={() => this.setState({ count: this.state.count + 1 })}>Count Increase</button> */}

        <img
          src={avatar_url}
          alt="user-image"
          className="user-image"
        />
        <p>Name : {name} </p>
        <p>Location : {location}</p>
        <p>Contact : {login+"@foodie.com"}</p>
      </div>
    );
  }
}

export default UserClass;

// ClassBased Component is a JavaScript class that extends React.Component which uses render method and returns JSX.