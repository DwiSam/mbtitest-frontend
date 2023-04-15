import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Styles.css";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar Section/NavbarSection";
import Footer from "../../components/Footer Section/FooterSection";
import intro from "../../assets/Images/intro-ic.png";
import time from "../../assets/Images/time-ic.png";
import check from "../../assets/Images/check-ic.png";
import True from "../../assets/Images/true-ic.png";
import Title from "../../components/Layout/Title";

const Intro = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <Title title="Test Opening">
      <>
        <Navbar />
        <div className="intro" data-aos="zoom-in">
          <p className="intro-title">Tata Cara Menjawab Pertanyaan</p>
          <p className="intro-subtitle">
            Tes ini digunakan untuk mengetahui tipe kepribadian Anda.
            <br />
            Selain itu, melalui tes ini Anda juga akan mendapatkan saran jenis
            pekerjaan serta mata kuliah peminatan apa yang harus diambil untuk
            menggapai jenis pekerjaan yang sesuai dengan tipe kepribadian Anda.
          </p>

          <div className="intro-content">
            <div className="intro-left">
              <div className="into-ic">
                <img src={intro} alt="intro" height={289} width={405.67} />
              </div>
            </div>
            <div className="intro-right">
              <div className="time-ic">
                <img src={time} alt="time" height={66} width={66} />
                <p className="time-desc">
                  Tes ini terdiri dari 52 pertanyaan, dan tidak ada batasan
                  waktu pengerjaan. Akan tetapi umumnya tes ini akan memakan
                  waktu selama 15 menit.
                </p>
              </div>
              <div className="check-ic">
                <img src={check} alt="check" height={66} width={66} />
                <p className="check-desc">
                  Seluruh soal harus dijawab. Pilih opsi "A" atau "B" yang
                  sesuai dengan diri kamu. Setelah klik Selanjutnya kamu tidak
                  bisa mengganti jawaban.
                </p>
              </div>
              <div className="true-ic">
                <img src={True} alt="True" height={66} width={66} />
                <p className="true-desc">
                  Dalam tes ini tidak ada jawaban benar maupun salah. Pilihlah
                  jawaban yang sesuai dengan diri kamu.
                </p>
              </div>
            </div>
            <button className="button-start">
              {" "}
              <Link
                to="/test-page"
                style={{ textDecoration: "none", color: "#ffffff" }}
              >
                Mulai Tes Sekarang
              </Link>
            </button>
          </div>
        </div>
        <Footer />
      </>
    </Title>
  );
};

export default Intro;
