import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Styles.css";
import Modal from "react-bootstrap/Modal";
import webdev from "../../assets/Images/webdev.png";
import compsyst from "../../assets/Images/compsyst.png";
import sofdev from "../../assets/Images/softdev.png";
import infsec from "../../assets/Images/infsec.png";
import systsoft from "../../assets/Images/syssoft.png";
import compsup from "../../assets/Images/compsup.png";
import dba from "../../assets/Images/dba.png";
import comptinf from "../../assets/Images/comptinf.png";
import compnet from "../../assets/Images/compnet.png";
import netcomp from "../../assets/Images/netcomp.png";

const JobSection = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const [show, setShow] = useState(false);
  return (
    <div className="job-section">
      <p className="title-job-section">
        Computer and Information <br />
        Technology Occupations
      </p>

      <div className="job-category1" data-aos="fade-up">
        <div className="job-category-card">
          <div className="job-icon">
            <img className="job-icon" src={webdev} alt={webdev} />
          </div>
          <p className="job-title">
            Web Developer <br />& Digital Designer
          </p>
          <p className="job-description">
            Web developers membuat dan memelihara situs web. Desainer digital
            mengembangkan, membuat, dan menguji tata letak situs web...
          </p>
          <button className="btn-more" onClick={() => setShow(true)}>
            Selengkapnya
          </button>
        </div>

        <div className="job-category-card">
          <div className="job-icon">
            <img className="job-icon" src={compsyst} alt={compsyst} />
          </div>
          <p className="job-title">
            Computer Systems <br />
            Analysts
          </p>
          <p className="job-description">
            Mempelajari sistem prosedur komputer organisasi dan merancang
            peningkatannya. membantu organisasi beroperasi...
          </p>
          <button className="btn-more" onClick={() => setShow(true)}>
            Selengkapnya
          </button>
        </div>
        <div className="job-category-card">
          <div className="job-icon">
            <img className="job-icon" src={sofdev} alt={sofdev} />
          </div>
          <p className="job-title">
            Software Developer, Quality Assurance Analyst & Testers
          </p>
          <p className="job-description">
            Membuat aplikasi komputer yang memungkinkan pengguna melakukan tugas
            tertentu dan sistem yang ...
          </p>
          <button className="btn-more" onClick={() => setShow(true)}>
            Selengkapnya
          </button>
        </div>
        <div className="job-category-card">
          <div className="job-icon">
            <img className="job-icon" src={infsec} alt={infsec} />
          </div>
          <p className="job-title">
            Information Security <br />
            Analysts
          </p>
          <p className="job-description">
            Merencanakan dan melaksanakan langkah-langkah keamanan untuk
            melindungi jaringan, sistem komputer organisasi dan...
          </p>
          <button className="btn-more" onClick={() => setShow(true)}>
            Selengkapnya
          </button>
        </div>
      </div>

      <div className="job-category2" data-aos="fade-up">
        <div className="job-category-card">
          <div className="job-icon">
            <img className="job-icon" src={systsoft} alt={systsoft} />
          </div>
          <p className="job-title">
            Computer <br />
            Programmers
          </p>
          <p className="job-description">
            Computer programmer menulis, memodifikasi, dan menguji kode dan
            skrip yang memungkinkan perangkat lunak dan aplikasi...
          </p>
          <button className="btn-more" onClick={() => setShow(true)}>
            Selengkapnya
          </button>
        </div>
        <div className="job-category-card">
          <div className="job-icon">
            <img className="job-icon" src={compsup} alt={compsup} />
          </div>
          <p className="job-title">
            Computer Support <br />
            Specialists
          </p>
          <p className="job-description">
            Membantu pengguna komputer, organisasi, memelihara jaringan komputer
            atau memberikan bantuan teknis secara langsung...
          </p>
          <button className="btn-more" onClick={() => setShow(true)}>
            Selengkapnya
          </button>
        </div>
        <div className="job-category-card">
          <div className="job-icon">
            <img className="job-icon" src={dba} alt={dba} />
          </div>
          <p className="job-title">
            Database Administrators <br /> and Architects
          </p>
          <p className="job-description">
            Membuat atau mengatur sistem untuk menyimpan dan mengamankan
            berbagai data, seperti informasi keuangan dan...
          </p>
          <button className="btn-more" onClick={() => setShow(true)}>
            Selengkapnya
          </button>
        </div>
        <div className="job-category-card">
          <div className="job-icon">
            <img className="job-icon" src={comptinf} alt={comptinf} />
          </div>
          <p className="job-title">
            Computer & Information <br />
            Research Scientists
          </p>
          <p className="job-description">
            Merancang penggunaan inovatif untuk teknologi baru dan yang sudah
            ada, mempelajari dan memecahkan masalah ...
          </p>
          <button className="btn-more" onClick={() => setShow(true)}>
            Selengkapnya
          </button>
        </div>
      </div>

      <div className="job-category3" data-aos="fade-up">
        <div className="job-category-card">
          <div className="job-icon">
            <img className="job-icon" src={compnet} alt={compnet} />
          </div>
          <p className="job-title">
            Computer Network <br />
            Architects
          </p>
          <p className="job-description">
            Merancang dan membangun jaringan komunikasi data, termasuk jaringan
            area lokal (LAN), jaringan area luas (WAN), dan Intranet haru...
          </p>
          <button className="btn-more" onClick={() => setShow(true)}>
            Selengkapnya
          </button>
        </div>
        <div className="job-category-card">
          <div className="job-icon">
            <img className="job-icon" src={netcomp} alt={netcomp} />
          </div>
          <p className="job-title">
            Network & Computer <br />
            Systems Administrators
          </p>
          <p className="job-description">
            Bertanggung jawab atas pengoperasian jaringan sehari-hari. Mengatur,
            memasang, dan mendukung sistem ...
          </p>
          <button className="btn-more" onClick={() => setShow(true)}>
            Selengkapnya
          </button>
        </div>
      </div>

      <Modal show={show} onHide={() => setShow(false)} size="lg">
        <Modal.Header closeButton>
          <Modal.Title
            className="job-title"
            id="example-custom-modal-styling-title"
          >
            Web Developer & Digital Designer
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p className="description">
            Web developers membuat dan memelihara situs web. Desainer digital
            mengembangkan, membuat, dan menguji tata letak situs web atau
            antarmuka, fungsi, dan navigasi untuk kegunaannya.
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
                kebutuhan, desain, dan fungsionalitas situs web atau antarmuka.
              </li>
              <li className="description-point">
                Membuat dan menguji aplikasi, antarmuka, dan menu navigasi untuk
                situs web.
              </li>
              <li className="description-point">
                Bekerja dengan desainer grafis dan desainer lain untuk
                menentukan tata letak situs web.
              </li>
              <li className="description-point">
                Merancang dan mengembangkan grafis dan memelihara situs web.
                Desainer digital mengembangkan, membuat, dan menguji tata letak
                situs web atau antarmuka, fungsi, dan navigasi untuk
                kegunaannya.
              </li>
            </ul>
          </div>
          <p className="description">
            <span style={{ color: "#000000", fontWeight: "bold" }}>
              Keterampilan yang dibutuhkan :
            </span>
            <br />
            HTML CSS, Javascript Framework, Rest Apis, Sql Server, UI/UX, PHP
            Laravel, Node.
          </p>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default JobSection;
