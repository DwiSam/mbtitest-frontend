import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Styles.css";
import hero from "../../assets/Images/Hero.png";
import { Link } from "react-router-dom";

const Intro = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <div className="hero" data-aos="fade-down">
      <div className="i-left">
        <div className="i-name">
          <p className="name">
            Find the Path to Reach
            <br />
            Your <span style={{ color: "#0000ff" }}>Dream Jobs</span>
          </p>
          <p className="i-info">
            Yuk kenali potensi diri kamu yang harus kamu kembangkan
            <br />
            demi mencapai pekerjaan impian kamu.
          </p>
        </div>
        <div className="button">
          <button className="btn-primary">
            <Link
              to="/intro-test"
              style={{ textDecoration: "none", color: "#ffffff" }}
            >
              Get Started
            </Link>
          </button>
          <nav className="btn-details">
            <a href="#description">Learn More</a>
          </nav>
        </div>
      </div>
      <div className="i-right">
        <div className="i-box">
          <div>
            <img
              className="hero-logo"
              src={hero}
              alt="hero"
              height={510}
              width={560}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
