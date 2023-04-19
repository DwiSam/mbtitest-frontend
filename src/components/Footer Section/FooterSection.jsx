import React from "react";
import "./Styles.css";
import { Link } from "react-router-dom";
import { Nav, Navbar } from "react-bootstrap";

const Footer = () => {
  return (
    <div className="main-footer">
      <div className="container">
        <div className="row">
          <div className="col">
            <Navbar.Brand href="/">
              <div className="logo-footer">Career Paths</div>
            </Navbar.Brand>
            <ul className="list-unstyled">
              <p className="footer-desc" style={{ color: "#000000" }}>
                Website rekomendasi karier pekerjaan IT berdasarkan tes MBTI
              </p>
            </ul>
          </div>

          <div className="col">
            <h5 style={{ color: "#000000", fontWeight: "bold" }}>Account</h5>
            <ul className="list-unstyled">
              <Nav.Link as={Link} to="/register">
                Registrasi
              </Nav.Link>
              <Nav.Link as={Link} to="/login">
                Login
              </Nav.Link>
            </ul>
          </div>

          <div className="col">
            <h5 style={{ color: "#000000", fontWeight: "bold" }}>Company</h5>
            <ul className="list-unstyled">
              <Nav.Link as={Link} to="/">
                Tentang Kami
              </Nav.Link>

              <Nav.Link href="https://www.instagram.com/informationretrievallab_itpln/">
                Media
              </Nav.Link>
            </ul>
          </div>

          <div className="col">
            <h5 style={{ color: "#000000", fontWeight: "bold" }}>
              Get Connected
            </h5>
            <ul className="list-unstyled">
              <Nav.Link href="https://www.google.co.id/maps/place/Institut+Teknologi+PLN/@-6.1682458,106.724257,17z/data=!3m1!4b1!4m5!3m4!1s0x2e69f788f60e492d:0x8b5ed89a85136510!8m2!3d-6.1682511!4d106.7264457">
                Jakarta Barat
              </Nav.Link>
              <Nav.Link type="link" href="tel:0234567890">
                02345-567-890
              </Nav.Link>
              <Nav.Link type="link" href="mailto:sistemrekomendasi@gmail.com">
                sistemrekomendasi@gmail.com
              </Nav.Link>
            </ul>
          </div>
        </div>
      </div>

      <hr />
      <div className="row">
        <p className="col text-center copyrights">
          &copy;{new Date().getFullYear()} Copyright • All rights reserved •
          Career Paths • Jakarta
        </p>
      </div>
    </div>
  );
};

export default Footer;
