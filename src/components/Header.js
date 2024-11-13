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
          <div className="bg-gray-300 rounded-3xl py-2 px-3 mr-2">
            {loggedInUser.split(" ")[0].slice(0, 1) +
              loggedInUser.split(" ")[1].slice(0, 1)}
          </div>
          <div className="absolute right-1 top-2">
            {internetStatus ? "🟢" : "🔴"}
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Header;
