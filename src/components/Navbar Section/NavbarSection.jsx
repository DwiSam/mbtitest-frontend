import React from "react";
import "./Styles.css";
import { Link, useNavigate } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import UserIC from "../../assets/Images/username-ic.svg";

const NavbarSection = () => {
  let navigate = useNavigate();

  function logOut() {
    localStorage.removeItem("token");
    navigate("/");
  }

  return (
    <div className="navbar">
      <Navbar collapseOnSelect expand="lg" bg="white" variant="white">
        <Container>
          <Navbar.Brand className="n-left">
            <Link to="/" style={{ textDecoration: "none", fontWeight: "bold" }}>
              Career Paths
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/" style={{ color: "black" }}>
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/about-us" style={{ color: "black" }}>
                Tentang Kami
              </Nav.Link>
              <Nav.Link
                type="link"
                href="mailto:sistemrekomendasi@gmail.com"
                style={{ color: "black" }}
              >
                Contact
              </Nav.Link>
            </Nav>
            <Nav>
              <div className="n-right">
                {localStorage.getItem("token") ? (
                  <>
                    <span role="button" onClick={logOut} className="logout">
                      Logout
                      <img
                        className="btn-logout"
                        src={UserIC}
                        alt={UserIC}
                        height={30}
                        width={30}
                      />
                    </span>
                  </>
                ) : (
                  <>
                    <div className="buttton">
                      <button className="btn-register">
                        <Link to="/register">REGISTER</Link>
                      </button>
                      <button className="btn-login">
                        <Link to="/login" style={{ color: "white" }}>
                          LOGIN
                        </Link>
                      </button>
                    </div>
                  </>
                )}
              </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavbarSection;
