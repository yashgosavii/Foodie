import { Logo_URL } from "../utils/constants";
import { useState, useContext } from "react";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("LOGIN");
  const getOnlineStatus = useOnlineStatus();
  const user = useContext(UserContext);

    return (
      <div className="flex justify-between items-center bg-pink-100 shadow-md px-6 py-2 ">
  <div className="logo-container">
    <img className="w-32" src={Logo_URL} alt="logo" />
  </div>
  <div className="nav-items">
    <ul className="flex items-center space-x-4">
      <li className="text-md font-semibold">{getOnlineStatus === true ? '✅' : '⛔'}</li>
      <li className="text-md font-medium">
        <Link to="/">HOME</Link>
      </li>
      <li className="text-md font-medium">
        <Link to="/grocery">GROCERY</Link>
      </li>
      <li className="text-md font-medium">
        <Link to="/about">ABOUT</Link>
      </li>
      <li className="text-md font-medium">
        <Link to="/contact">CONTACT</Link>
      </li>
      <li className="text-md font-medium ">
        <Link to="/cart">CART</Link>
      </li>
      <button
        className="px-3 py-1 bg-pink-500 text-white rounded-lg font-semibold text-sm"
        onClick={() => {
          btnNameReact === "LOGIN"
            ? setBtnNameReact("LOGOUT")
            : setBtnNameReact("LOGIN");
        }}
      >
        {btnNameReact}
      </button>
      <li className="text-md font-medium uppercase">
        {user.loggedInUser}
      </li>
    </ul>
  </div>
</div>

    )
}

export default Header;