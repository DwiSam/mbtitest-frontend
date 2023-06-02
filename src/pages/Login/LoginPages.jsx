import React, { useRef, useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Spinner from "react-bootstrap/Spinner";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Styles.css";
import Navbar from "../../components/Navbar Section/NavbarSection";
import Footer from "../../components/Footer Section/FooterSection";
import LoginIc from "../../assets/Images/loginreg.png";
import EmailIc from "../../assets/Images/mail-ic.svg";
import PwdIc from "../../assets/Images/password-ic.svg";
import Eye from "../../assets/Images/eye-ic.svg";
import EyeC from "../../assets/Images/eyeC.svg";
import Title from "../../components/Layout/Title";

const LoginPage = () => {
  AOS.init({ duration: 1000 });

  const navigate = useNavigate();
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const [rememberedEmail, setRememberedEmail] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const rememberedEmail = localStorage.getItem("rememberedEmail");
    if (rememberedEmail) {
      setRememberedEmail(rememberedEmail);
      setRememberMe(true);
    }
  }, []);

  const handleRememberMe = () => {
    setRememberMe(!rememberMe);
    if (!rememberMe) {
      localStorage.setItem("rememberedEmail", emailInputRef.current.value);
    } else {
      localStorage.removeItem("rememberedEmail");
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;
    let auth = localStorage.getItem("token");

    setLoading(true);

    fetch(`http://localhost:8080/v1/user/login`, {
      method: "POST",
      body: JSON.stringify({
        email: enteredEmail,
        password: enteredPassword,
        returnSecureToken: true,
      }),
      headers: {
        Accept: "/",
        "Content-Type": "application/json",
        Token: auth,
      },
    })
      .then((response) => {
        if (response.status === 200) {
          console.log("SUCCESSS");
          navigate("/intro-test");
          window.location.reload();
          return response.json();
        } else if (response.status === 401) {
          console.log("SOMETHING WENT WRONG");
          this.setState({ requestFailed: true });
        }
      })
      .then((data) => {
        console.log(data.token);
        localStorage.setItem("token", data.token);
      })
      .catch((err) => {
        setPasswordError(true);
        return;
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <Title title="Login">
      <>
        <Navbar />

        <div className="login" data-aos="fade-down">
          <div className="login-ic">
            <img className="login-logo" src={LoginIc} alt={LoginIc} />
          </div>
          <div className="login-box">
            <h3 className="loginreg-title">Selamat Datang Kembali</h3>
            <p className="loginreg-sub-title">
              Silahkan masuk dengan akun yang sudah terdaftar
            </p>
            <Form onSubmit={handleSubmit}>
              <InputGroup className="email-form">
                <InputGroup className="form-ic">
                  <img className="form-icon" src={EmailIc} alt={EmailIc} />
                  <Form.Control
                    className="login-input"
                    type="email"
                    placeholder="Email"
                    required
                    ref={emailInputRef}
                    defaultValue={rememberedEmail}
                  />
                </InputGroup>
              </InputGroup>

              <InputGroup className="password-form">
                <InputGroup className="form-ic">
                  <img className="form-icon" src={PwdIc} alt={PwdIc} />
                  <Form.Control
                    className="login-input"
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                    required
                    ref={passwordInputRef}
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

              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckChecked"
                  checked={rememberMe}
                  onChange={handleRememberMe}
                />
                <label className="form-check-label" htmlFor="flexCheckChecked">
                  Ingat saya
                </label>
              </div>

              {passwordError && (
                <label className="wrong">Data yang anda masukkan salah!</label>
              )}

              <button className="btn-masuk" type="submit" disabled={loading}>
                {loading ? (
                  <>
                    <Spinner
                      as="span"
                      animation="grow"
                      size="sm"
                      role="status"
                      aria-hidden="true"
                    />
                    Loading...
                  </>
                ) : (
                  "Masuk"
                )}
              </button>
            </Form>
            <p className="create-account">
              Belum Punya Akun?{" "}
              <span style={{ fontWeight: "bold", color: "#000000" }}>
                <Link to="/register" style={{ textDecoration: "none" }}>
                  Daftar Sekarang
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

export default LoginPage;
