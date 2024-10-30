import { useState } from "react";
import { APP_LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useInternetStatus from "../utils/useInternetStatus";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");

  const internetStatus = useInternetStatus();

  return (
    <div className="header">
      <div className="imageContainer">
        <Link to="">
          <img className="logo" src={APP_LOGO_URL} />
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
            <Link to="/cart">
              <img
                style={{ height: "60px", width: "40px", display: "flex" }}
                src="https://www.clker.com/cliparts/X/U/F/3/N/2/shopping-cart-logo.svg"
              />
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
        </ul>
      </div>
    </div>
  );
};

export default Header;
