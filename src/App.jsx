import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "../src/pages/Home/HomePage";
import LoginPage from "../src/pages/Login/LoginPages";
import RegisterPage from "../src/pages/Register/RegisterPage";
import IntroPage from "../src/pages/Intro Test/Intro";
import TestPage from "../src/pages/Test/Test";
import ResultPage from "../src/pages/Result/Result";
import ErrorPage from "../src/pages/Error/Error";
import AboutUs from "./pages/About Us/AboutUs";
import Admin from "./pages/Admin/Login";
import Dashboard from "./pages/Admin/Dashboard";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="*" element={<ErrorPage />} />
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/intro-test" element={<IntroPage />} />
          <Route path="/test-page" element={<TestPage />} />
          <Route path="/result" element={<ResultPage />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/admin-login" element={<Admin />} />
          <Route path="/admin-dashboard" element={<Dashboard />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
