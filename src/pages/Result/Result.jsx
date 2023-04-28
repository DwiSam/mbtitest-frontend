import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Styles.css";
import Navbar from "../../components/Navbar Section/NavbarSection";
import Footer from "../../components/Footer Section/FooterSection";
import webDev from "../../assets/Images/webdev.png";
import BG from "../../assets/Images/bg.png";
// import Final from "../../assets/Images/final-ic.png";
import Title from "../../components/Layout/Title";
import descriptions from "../../data/Personality Types Desc/PersonalityTypes";
import descTypes from "../../data/Descriptions/DescType";
// import matkul from "../../data/Mata Kuliah/Matkul";

const ResultPage = ({ result }) => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <Title title="Test Result">
      <>
        <Navbar />
        <div className="resultPage">
          <div className="bg">
            <img className="bg" src={BG} alt="bg" height={"1100"} />
          </div>
          <div className="resultSection">
            <div className="intro-user-result">
              <p className="hi-user">Halo John Doe</p>
              <p className="type-result">
                Berdasarkan tes yang sudah kamu lakukan, tipe kepribadian kamu
                adalah
              </p>
            </div>
            <p className="user-result">
              {result} {descriptions[result]}
            </p>
            <p className="characteristic-desc">
              Karakteristik {result} adalah :
            </p>
            <div>{descTypes[result]}</div>
          </div>

          <div className="jobSection" data-aos="fade-up">
            <p className="title-jobSection">
              Berikut jenis pekerjaan yang cocok dengan tipe kepribadian{" "}
              {result}
            </p>
            <div className="jobs-box">
              <div className="title-job-box">
                <img className="jobs-ic" src={webDev} alt="webDev" />
                <p className="title-jobs">Web Developer & Digital Designers</p>
              </div>
              <div className="desc-job-box">
                <p className="description">
                  Web developers membuat dan memelihara situs web. Desainer
                  digital mengembangkan, membuat, dan menguji tata letak situs
                  web atau antarmuka, fungsi, dan navigasi untuk kegunaannya.
                  <br />
                  <br />
                  <span style={{ color: "#000000", fontWeight: "bold" }}>
                    Tugas & Tanggung Jawab :
                  </span>
                </p>
                <div>
                  <ul className="description-points">
                    <li className="description-point">
                      Bertemu dengan klien atau manajemen untuk mendiskusikan
                      kebutuhan, desain, dan fungsionalitas situs web atau
                      antarmuka.
                    </li>
                    <li className="description-point">
                      Membuat dan menguji aplikasi, antarmuka, dan menu navigasi
                      untuk situs web.
                    </li>
                    <li className="description-point">
                      Bekerja dengan desainer grafis dan desainer lain untuk
                      menentukan tata letak situs web.
                    </li>
                    <li className="description-point">
                      Merancang dan mengembangkan grafis dan memelihara situs
                      web. Desainer digital mengembangkan, membuat, dan menguji
                      tata letak situs web atau antarmuka, fungsi, dan navigasi
                      untuk kegunaannya.
                    </li>
                  </ul>
                </div>
                <p className="description">
                  <span style={{ color: "#000000", fontWeight: "bold" }}>
                    Keterampilan yang dibutuhkan :
                  </span>
                  <br />
                  HTML CSS, Javascript Framework, Rest Apis, Sql Server, UI/UX,
                  PHP Laravel, Node.
                </p>
                <p className="description">
                  <span style={{ color: "#000000", fontWeight: "bold" }}>
                    Mata kuliah yang harus kamu ambil :
                  </span>
                  <br />
                  Pemrograman Web Lanjut, Manajemen Proyek Perangkat Lunak.
                </p>
              </div>
            </div>
          </div>

          {/* <div className="matkulSection">
            <p className="title-matkulSection">
              Berikut mata kuliah yang harus kamu ambil untuk mencapai pekerjaan
              impian kamu
            </p>

            <div className="matkul-category1" data-aos="fade-up">
              {matkul[result]}
            </div>

            <div className="matkul-category2" data-aos="fade-up">
              <div className="matkul-category-card">
                <p className="matkul-title">
                  Database Administrators <br /> and Architects
                </p>
              </div>
              <div className="matkul-category-card">
                <p className="matkul-title">
                  Computer & Information <br />
                  Research Scientists
                </p>
              </div>
            </div>
          </div> */}
        </div>
        <Footer />
      </>
    </Title>
  );
};

export default ResultPage;
