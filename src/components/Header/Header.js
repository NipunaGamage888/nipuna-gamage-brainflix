import React from "react";
import logo1 from "../../assets/images/logo/BrainFlix-logo.svg";
import profile from "../../assets/images/Mohan-muruge.jpg";
import "./header.css";
import Button from "../Button/Button.js";
import buttonImage from "../../assets/images/icons/upload.svg";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <Link to={'/'}>
        <img className="header__logo" src={logo1} alt="Logo of the page" />
      </Link>

      <div className="header__input-holder">
        <input className="header__input" type="search" placeholder="Search" />
        <img
          alt="profile image"
          className="header__profile-image"
          src={profile}
        />
      </div>
      <div className="header__button-container">
        <Button buttonName="UPLOAD" image={buttonImage} />
      </div>
    </header>
  );
};

export default Header;
