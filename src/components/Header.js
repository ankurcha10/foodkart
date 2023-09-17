import LOGO_URL from "../utils/constant";
import { useContext, useState } from "react";
import useOnlineStatus from "../utils/useOnlineStatus";
import { Link } from "react-router-dom";
import userContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("Login");
  const onlineStatus = useOnlineStatus();
  const { loggedInUser } = useContext(userContext);

  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className="bg-green-100 shadow-lg p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="logo-container">
          <Link to="/">
            <img
              className="w-56 bg-opacity-50 rounded-lg"
              src={LOGO_URL}
              alt="Logo"
            />
          </Link>
        </div>

        <div className="flex items-center space-x-4">
          <ul className="flex space-x-4">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/grocery">Grocery</Link>
            </li>
            <li className="font-bold">
              <Link to="/cart">Cart - ({cartItems.length} Items)</Link>
            </li>
          </ul>

          <button
            className="login px-4 py-2 rounded-lg border-2 border-green-500 hover:bg-green-500 hover:text-white transition duration-300"
            onClick={() => {
              btnNameReact === "Login"
                ? setBtnNameReact("Logout")
                : setBtnNameReact("Login");
            }}
          >
            {btnNameReact}
          </button>

          <div className="px-4 font-bold text-green-500">
            {loggedInUser}
          </div>
        </div>
      </div>
      <div className="text-center mt-2">
        Online Status: {onlineStatus ? "🟢" : "🔴"}
      </div>
    </div>
  );
};

export default Header;
