import { Logo_URL } from "../utils/constants";
import { useState } from "react";
import {Link} from "react-router";
const Header = () => {

  const [btnNameReact, setBtnNameReact] = useState("LOGIN");

    return (
      <div className="header">
        <div className="logo-container">
          <img className="logo" src={Logo_URL} alt="logo" />
        </div>
        <div className="nav-items">
          <ul >
            <li><Link to="/">HOME</Link></li>
            <li><Link to="/about">ABOUT</Link></li>
            <li><Link to="/contact">CONTACT</Link></li>
            <li><Link to="/cart">CART</Link></li>
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