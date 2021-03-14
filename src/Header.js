import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import "./Header.css";
import { Link } from "react-router-dom";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { UseStateValue } from "./StateProvider";
import { auth } from "./firebase";

function Header() {
  const [{ basket, loggedinuser }, dispatch] = UseStateValue();
console.log('user >>' , loggedinuser);
  const logoutuser = () => {
    if (loggedinuser) {
      auth.signOut();
    }
  };

  return (
    <nav className="header">
      <a href="/">
        <img className="header__logo" src="/img/logo.png" alt="logo" />
      </a>
      <div className="header__search d-none d-lg-block">
        <input className="header__searchInput " type="text" />
        <SearchIcon className="header__searchIcon"/>
      </div>
      <div className="header__nav">
        <Link to="/Login"className="header__link">
          <div onClick={logoutuser} className="header__option">
            <span className="header__optionLineOne">
              Hello, <br/>{!loggedinuser ? "Guest" : loggedinuser.email}
            </span>
            <span className="header__optionLineTwo">
              {loggedinuser ? "Sign Out" : "Sign In"}
            </span>
          </div>
        </Link>
      </div>
      <Link to="/checkout" className="header_link">
        <div className="header_optionBasket">
          <ShoppingBasketIcon />
          <span className="header_optionLineTwo header__productCount">
            {basket?.length}
          </span>
        </div>
      </Link>
    </nav>
  );
}

export default Header;