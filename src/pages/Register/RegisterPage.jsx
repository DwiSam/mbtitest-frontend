import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Toast from "react-bootstrap/Toast";
import Spinner from "react-bootstrap/Spinner";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Styles.css";
import Navbar from "../../components/Navbar Section/NavbarSection";
import Footer from "../../components/Footer Section/FooterSection";
import RegsiterIc from "../../assets/Images/loginreg.png";
import UsernameIc from "../../assets/Images/username-ic.svg";
import EmailIc from "../../assets/Images/mail-ic.svg";
import PwdIc from "../../assets/Images/password-ic.svg";
import Eye from "../../assets/Images/eye-ic.svg";
import EyeC from "../../assets/Images/eyeC.svg";
import Ic from "../../assets/Images/logo.svg";
import Title from "../../components/Layout/Title";

const RegisterPage = () => {
  AOS.init({ duration: 1000 });

  const Navigate = useNavigate();
  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm_password, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showCPassword, setShowCPassword] = useState(false);
  const [passwordChar, setPasswordChar] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [show, setShow] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [redirectToLogin, setRedirectToLogin] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    if (password !== confirm_password) {
      setPasswordError(true);
      setPasswordChar(false);
      return;
    } else if (password.length < 8) {
      setPasswordError(false);
      setPasswordChar(true);
      return;
    } else {
      try {
        let res = await axios.post(
          `http://localhost:8080/v1/user/register`,
          {
            first_name: first_name,
            last_name: last_name,
            email: email,
            password: password,
            confirm_password: confirm_password,
          },
          {
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
          }
        );
        console.log(res);
        if (res.data.error) {
          alert(res.data.error);
        } else if (res.status === 201) {
          setShow(true);
          setRedirectToLogin(true);
        }
      } catch (error) {
        setShowToast(true);
      }
    }
    if (redirectToLogin) {
      Navigate("/login");
    }
    setIsLoading(false);
  };

  return (
    <Title title="Register">
      <>
        <Navbar />

        <Row>
          <Col md={6} className="mb-2">
            <Toast
              onClose={() => setShowToast(false)}
              show={showToast}
              style={{
                position: "fixed",
                top: "5px",
                right: "5px",
                zIndex: 9999,
                minWidth: "200px",
                background: "#36c8f6",
              }}
            >
              <Toast.Header>
                <img
                  src={Ic}
                  className="rounded me-2"
                  alt=""
                  height={20}
                  width={20}
                />
                <strong
                  className="me-auto"
                  style={{
                    color: "#0000ff",
                  }}
                >
                  Career Paths
                </strong>
                <small
                  style={{
                    color: "#36c8f6",
                  }}
                >
                  Just now
                </small>
              </Toast.Header>
              <Toast.Body
                style={{
                  color: "#000000",
                  textAlign: "center",
                }}
              >
                Data yang kamu masukkan salah/Email Sudah terdaftar
              </Toast.Body>
            </Toast>
          </Col>
        </Row>
        <div className="register" data-aos="fade-down">
          <div className="register-ic">
            <img className="register-logo" src={RegsiterIc} alt={RegsiterIc} />
          </div>
          <div className="register-box">
            <h3 className="loginreg-title">Selamat Datang</h3>
            <p className="loginreg-sub-title">
              Silahkan daftar menggunakan email kampus Anda
            </p>

            <Form onSubmit={handleSubmit}>
              <InputGroup className="name-register-form">
                <InputGroup className="form-ic">
                  <img
                    className="form-icon"
                    src={UsernameIc}
                    alt={UsernameIc}
                  />
                  <Form.Control
                    className="register-input"
                    placeholder="Nama Depan"
                    type="text"
                    id="first_name"
                    value={first_name}
                    onChange={(e) => setFirstName(e.target.value)}
                    required
                  />
                </InputGroup>
              </InputGroup>
              <InputGroup className="name2-register-form">
                <InputGroup className="form-ic">
                  <img
                    className="form-icon"
                    src={UsernameIc}
                    alt={UsernameIc}
                  />
                  <Form.Control
                    className="register-input"
                    placeholder="Nama Belakang"
                    type="text"
                    id="last_name"
                    value={last_name}
                    onChange={(e) => setLastName(e.target.value)}
                    required
                  />
                </InputGroup>
              </InputGroup>

              <InputGroup className="email-register-form">
                <InputGroup className="form-ic">
                  <img className="form-icon" src={EmailIc} alt={EmailIc} />
                  <Form.Control
                    className="register-input"
                    placeholder="Email"
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </InputGroup>
              </InputGroup>

              <InputGroup className="password-register-form">
                <InputGroup className="form-ic">
                  <img className="form-icon" src={PwdIc} alt={PwdIc} />
                  <Form.Control
                    className="register-input"
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                    required
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <span
                    role="button"
                    className="show-pwd-ic"
                    onClick={() =>
                      setShowPassword((showPassword) => !showPassword)
                    }
                  >
                    {showPassword ? (
                      <img className="show-pwd" src={Eye} alt={Eye} />
                    ) : (
                      <img className="show-pwd" src={EyeC} alt={EyeC} />
                    )}
                  </span>
                </InputGroup>
              </InputGroup>
              <InputGroup className="password-confirm-register-form">
                <InputGroup className="form-ic">
                  <img className="form-icon" src={PwdIc} alt={PwdIc} />
                  <Form.Control
                    className="register-input"
                    type={showCPassword ? "text" : "password"}
                    placeholder="Konfirmasi"
                    required
                    id="confirm_password"
                    value={confirm_password}
                    onChange={(e) => {
                      setConfirmPassword(e.target.value);
                    }}
                  />
                  <span
                    role="button"
                    className="show-pwd-ic"
                    onClick={() =>
                      setShowCPassword((showCPassword) => !showCPassword)
                    }
                  >
                    {showCPassword ? (
                      <img className="show-pwd" src={Eye} alt={Eye} />
                    ) : (
                      <img className="show-pwd" src={EyeC} alt={EyeC} />
                    )}
                  </span>
                </InputGroup>
              </InputGroup>
              {passwordChar && (
                <label className="min-password">
                  Kata sandi minimal 8 karakter!
                </label>
              )}
              {passwordError && (
                <label className="min-password">Kata sandi tidak cocok!</label>
              )}

              <button className="btn-daftar" type="submit" disabled={isLoading}>
                {isLoading ? (
                  <>
                    <Spinner
                      as="span"
                      animation="grow"
                      size="sm"
                      role="status"
                      aria-hidden="true"
                    />{" "}
                    Loading...
                  </>
                ) : (
                  "Daftar Sekarang"
                )}
              </button>

              {show && (
                <Row>
                  <Col md={6} className="mb-2">
                    <Toast
                      onClose={() => setShow(false)}
                      show={show}
                      style={{
                        position: "fixed",
                        top: "5px",
                        right: "5px",
                        zIndex: 9999,
                        minWidth: "200px",
                        background: "#36c8f6",
                      }}
                    >
                      <Toast.Header>
                        <img
                          src={Ic}
                          className="rounded me-2"
                          alt=""
                          height={20}
                          width={20}
                        />
                        <strong
                          className="me-auto"
                          style={{
                            color: "#0000ff",
                          }}
                        >
                          Career Paths
                        </strong>
                        <small
                          style={{
                            color: "#36c8f6",
                          }}
                        >
                          Just now
                        </small>
                      </Toast.Header>
                      <Toast.Body
                        style={{
                          color: "#000000",
                          textAlign: "center",
                        }}
                      >
                        Yeay! kamu berhasil daftar. Silahkan login terlebih
                        dahulu
                      </Toast.Body>
                    </Toast>
                  </Col>
                </Row>
              )}
            </Form>
            <p className="login-account">
              Sudah Punya Akun?{" "}
              <span style={{ fontWeight: "bold", color: "#000000" }}>
                <Link to="/login" style={{ textDecoration: "none" }}>
                  Masuk Sekarang
                </Link>
              </span>
            </p>
          </div>
        </div>
        <Footer />
      </>
    </Title>
  );
};

export default RegisterPage;
