import { useState, useContext } from "react";
import { APP_LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useInternetStatus from "../utils/useInternetStatus";
import UserContext from "../utils/userContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  const { loggedInUser } = useContext(UserContext);

  const internetStatus = useInternetStatus();

  // Subscribing to the cart store using a Selector
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className="header">
      <div>
        <Link to="">
          <img className="logo" alt="app-logo" src={APP_LOGO_URL} />
        </Link>
      </div>

      <div className="navItems">
        <ul>
          <li>Online Status: {internetStatus ? "🟢" : "🔴"}</li>
          <li>
            <Link
              to="/about"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              About Us
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              Contact Us
            </Link>
          </li>
          <li style={{ paddingTop: "20px" }}>
            <Link to="/cart" className="flex flex-nowrap">
              <img
                style={{ height: "60px", width: "40px", display: "flex" }}
                alt="shopping-cart"
                src="https://www.clker.com/cliparts/X/U/F/3/N/2/shopping-cart-logo.svg"
              />
              <div className="flex items-center p-2 rounded-3xl bg-orange-600 text-white h-7">
                {cartItems.length}
              </div>
            </Link>
          </li>
          <button
            className="btnLoginLogout"
            onClick={() => {
              setBtnName(btnName === "Login" ? "Logout" : "Login");
            }}
          >
            {btnName}
          </button>
          <li style={{ paddingTop: "10px" }}>{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
