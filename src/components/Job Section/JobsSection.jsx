import React, { useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Styles.css";
import JobModal from "../Job Modal/JobModals";
import jobData from "../../data/Jobs/JobsData";
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
  AOS.init({ duration: 1000 });

  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState({
    title: "",
    description: "",
    tasks: [],
    skills: "",
  });

  const handleShowModal = (title, description, tasks, skills) => {
    setModalContent({
      title,
      description,
      tasks,
      skills,
    });
    setShowModal(true);
  };

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
          <button
            className="btn-more"
            onClick={() =>
              handleShowModal(
                jobData[0].title,
                jobData[0].description,
                jobData[0].tasks,
                jobData[0].skills
              )
            }
          >
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
          <button
            className="btn-more"
            onClick={() =>
              handleShowModal(
                jobData[1].title,
                jobData[1].description,
                jobData[1].tasks,
                jobData[1].skills
              )
            }
          >
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
          <button
            className="btn-more"
            onClick={() =>
              handleShowModal(
                jobData[2].title,
                jobData[2].description,
                jobData[2].tasks,
                jobData[2].skills
              )
            }
          >
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
          <button
            className="btn-more"
            onClick={() =>
              handleShowModal(
                jobData[3].title,
                jobData[3].description,
                jobData[3].tasks,
                jobData[3].skills
              )
            }
          >
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
          <button
            className="btn-more"
            onClick={() =>
              handleShowModal(
                jobData[4].title,
                jobData[4].description,
                jobData[4].tasks,
                jobData[4].skills
              )
            }
          >
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
          <button
            className="btn-more"
            onClick={() =>
              handleShowModal(
                jobData[5].title,
                jobData[5].description,
                jobData[5].tasks,
                jobData[5].skills
              )
            }
          >
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
          <button
            className="btn-more"
            onClick={() =>
              handleShowModal(
                jobData[6].title,
                jobData[6].description,
                jobData[6].tasks,
                jobData[6].skills
              )
            }
          >
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
          <button
            className="btn-more"
            onClick={() =>
              handleShowModal(
                jobData[7].title,
                jobData[7].description,
                jobData[7].tasks,
                jobData[7].skills
              )
            }
          >
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
          <button
            className="btn-more"
            onClick={() =>
              handleShowModal(
                jobData[8].title,
                jobData[8].description,
                jobData[8].tasks,
                jobData[8].skills
              )
            }
          >
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
          <button
            className="btn-more"
            onClick={() =>
              handleShowModal(
                jobData[9].title,
                jobData[9].description,
                jobData[9].tasks,
                jobData[9].skills
              )
            }
          >
            Selengkapnya
          </button>
        </div>
      </div>

      <JobModal
        show={showModal}
        onHide={() => setShowModal(false)}
        title={modalContent.title}
        description={modalContent.description}
        tasks={modalContent.tasks}
        skills={modalContent.skills}
      />
    </div>
  );
};

export default JobSection;
