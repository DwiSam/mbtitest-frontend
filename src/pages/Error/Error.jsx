import React from "react";
import "./Styles.css";
import { Link, useLocation } from "react-router-dom";
import FinalIC from "../../assets/Images/final-ic.png";
import Title from "../../components/Layout/Title";

const Error = () => {
  let location = useLocation();
  return (
    <Title title="Not Found">
      <div className="error-page">
        <p className="error-title">404 | Not Found</p>
        <p className="intro-error-subtitle">
          Maaf, halaman <code>{location.pathname}</code> tidak ditemukan.
          <img className="error-ic" src={FinalIC} alt="final-ic" />
        </p>

        <button className="button-back">
          <Link to="/" style={{ textDecoration: "none", color: "#ffffff" }}>
            Back Home
          </Link>
        </button>
      </div>
    </Title>
  );
};

export default Error;
