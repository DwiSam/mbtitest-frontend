import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
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
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Title from "../../components/Layout/Title";

const RegisterPage = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const [Name, setName] = useState("");
  const [Fullname, setFullname] = useState("");
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [cPassword, setCPassword] = useState("");
  const Navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showCPassword, setShowCPassword] = useState(false);
  const [passwordChar, setPasswordChar] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (Password !== cPassword) {
      setPasswordError(true);
      return;
    } else if (Password.length < 8) {
      setPasswordChar(true);
      return;
    } else {
      try {
        let res = await axios.post(
          `http://localhost:8080/api/user/register`,
          {
            Fullname: Fullname,
            Email: Email,
            Password: Password,
            Role: "student",
          },
          {
            headers: {
              Accept: "/",
              "Content-Type": "application/json",
            },
          }
        );
        console.log(res);
        if (res.data.error) {
          alert(res.data.error);
        } else if (res.status === 200) {
          alert("Yeay! kamu berhasil daftar. silahkan login...");
          Navigate("/login");
        }
      } catch (error) {
        alert("Email Sudah terdaftar");
      }
    }
  };

  return (
    <Title title="Register">
      <>
        <Navbar />
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
                    type="text"
                    placeholder="Nama Depan"
                    required
                    id="Name"
                    value={Name}
                    onChange={(e) => setName(e.target.value)}
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
                    type="text"
                    placeholder="Nama Belakang"
                    required
                    id="FullName"
                    value={Fullname}
                    onChange={(e) => setFullname(e.target.value)}
                  />
                </InputGroup>
              </InputGroup>

              <InputGroup className="email-register-form">
                <InputGroup className="form-ic">
                  <img className="form-icon" src={EmailIc} alt={EmailIc} />
                  <Form.Control
                    className="register-input"
                    type="email"
                    placeholder="Email"
                    required
                    id="Email"
                    value={Email}
                    onChange={(e) => setEmail(e.target.value)}
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
                    id="Password"
                    value={Password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <button
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
                  </button>
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
                    id="cPassword"
                    value={cPassword}
                    onChange={(e) => {
                      setCPassword(e.target.value);
                    }}
                  />
                  <button
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
                  </button>
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

              <button className="btn-daftar" type="submit">
                Daftar Sekarang
              </button>
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
