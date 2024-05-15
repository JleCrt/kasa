import React from "react";
import "../styles/layout/header.css";
import { NavLink } from "react-router-dom";
import logoKasa from "../assets/icons/kasa-logo.svg";

const Header = () => {
  return (
    <div className="header-div">
      <div className="logo-div">
        <img src={logoKasa} alt="logo kasa" />
      </div>
      <div className="nav-div">
        <nav>
          <ul>
            <NavLink
              to="/"
              className={({ isActive }) => {
                return isActive ? "nav-link active-link" : "nav-link";
              }}
            >
              Accueil
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) => {
                return isActive ? "nav-link active-link" : "nav-link";
              }}
            >
              À Propos
            </NavLink>
          </ul>
        </nav>
      </div>
    </div>
  );
};
export default Header;
