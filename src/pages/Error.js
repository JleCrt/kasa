import React from "react";
import "../styles/pages/error.css";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Error = () => {
  return (
    <>
    <Header />
    <div className="error">
        <p className="error-number">404</p>
        <p className="error-text">
          Oups! La page que vous demandez n'existe pas.
        </p>
      <Link to="/" className="error-link">
        Retourner sur la page d'accueil
      </Link>
    </div>
    <Footer />
    </>
  );
};

export default Error;
