import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Styles.css";
import Us from "../../assets/Images/Us.png";
import Title from "../../components/Layout/Title";
import Navbar from "../../components/Navbar Section/NavbarSection";
import Footer from "../../components/Footer Section/FooterSection";

const AboutUs = () => {
  AOS.init({ duration: 1000 });
  return (
    <Title title="About Us">
      <>
        <Navbar />
        <div
          className="content-3-1 container-xxl mx-auto position-relative"
          data-aos="fade-down"
        >
          <div className="d-flex flex-lg-row flex-column align-items-center">
            <div className="img-hero text-center justify-content-center d-flex">
              <img
                id="hero"
                className="img-fluid"
                src={Us}
                alt="Us"
                height={624}
                width={464}
              />
            </div>

            <div className="right-column d-flex flex-column align-items-lg-start align-items-center text-lg-start text-center">
              <h2 className="title-text">
                About{" "}
                <span style={{ color: "#0000ff", fontWeight: "bold" }}>
                  Career Paths
                </span>
              </h2>
              <p className="text-caption">
                Career Paths adalah platform yang dirancang untuk membantu Anda
                menemukan jenis kepribadian Anda melalui tes MBTI (Myers-Briggs
                Type Indicator). Anda akan diberikan rekomendasi pekerjaan yang
                sesuai dengan kepribadian Anda. Keunggulan Career Paths :
              </p>
              <ul className="p-0 m-0">
                <li className="list-unstyled" style={{ marginBottom: "2rem" }}>
                  <h4 className="title-caption d-flex flex-lg-row flex-column align-items-center justify-content-lg-start justify-content-center">
                    <span className="circle text-white d-flex align-items-center justify-content-center">
                      1
                    </span>
                    Menggunakan Ahli
                  </h4>
                  <p className="text-caption">
                    Dalam proses perancangan tes MBTI kami berdiskusi langsung
                    dengan psikolog dari Rise Consulting dalam penentuan jenis
                    pertanyaan dan klasifikasi jenis kepribadiannya.
                  </p>
                </li>
                <li className="list-unstyled" style={{ marginBottom: "2rem" }}>
                  <h4 className="title-caption d-flex flex-lg-row flex-column align-items-center justify-content-lg-start justify-content-center">
                    <span className="circle text-white d-flex align-items-center justify-content-center">
                      2
                    </span>
                    Rekomendasi Pekerjaan
                  </h4>
                  <p className="text-caption">
                    Setelah selesai melakukan tes, Anda akan diberikan
                    rekomendasi pekerjaan di bidang IT berdasarkan{" "}
                    <a
                      href="https://www.bls.gov/ooh/computer-and-information-technology/home.htm"
                      style={{ textDecoration: "none" }}
                    >
                      bls.gov
                    </a>{" "}
                    yang sesuai dengan tipe kepribadian Anda.
                  </p>
                </li>
                <li className="list-unstyled" style={{ marginBottom: "4rem" }}>
                  <h4 className="title-caption d-flex flex-lg-row flex-column align-items-center justify-content-lg-start justify-content-center">
                    <span className="circle text-white d-flex align-items-center justify-content-center">
                      3
                    </span>
                    Rekomendasi Mata Kuliah
                  </h4>
                  <p className="text-caption">
                    Tidak hanya pekerjaan, Anda juga akan diberikan rekomendasi
                    mata kuliah yang harus Anda ambil untuk menggapai pekerjaan
                    Anda. Selain itu juga dijelaskan skill apa saja yang
                    mendukung pekerjaan tersebut.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <Footer />
      </>
    </Title>
  );
};

export default AboutUs;
