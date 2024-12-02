import { Logo_URL } from "../utils/constants";
import { useState } from "react";
const Header = () => {

  const [btnNameReact, setBtnNameReact] = useState("LOGIN");

    return (
      <div className="header">
        <div className="logo-container">
          <img className="logo" src={Logo_URL} alt="logo" />
        </div>
        <div className="nav-items">
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Cart</li>
            <button className="login-button" onClick={()=>{
              btnNameReact === "LOGIN" ? setBtnNameReact("LOGOUT") :
              setBtnNameReact("LOGIN");
            }}> {btnNameReact} </button>
          </ul>
        </div>
      </div>
    )
}

export default Header;