import AOS from "aos";
import "aos/dist/aos.css";
import "./Styles.css";
import Navbar from "../../components/Navbar Section/NavbarSection";
import Footer from "../../components/Footer Section/FooterSection";
import BG from "../../assets/Images/bg.png";
import Title from "../../components/Layout/Title";
import descriptions from "../../data/Personality Types Desc/PersonalityTypes";
import descTypes from "../../data/Descriptions/DescType";
import jobsDesc from "../../components/Job Carousel/JobsDesc";

const ResultPage = ({ result }) => {
  AOS.init({ duration: 1000 });

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
              <p className="hi-user">Selamat kamu sudah menyelesaikan tes</p>
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

          <div className="jobSection">
            <p className="title-jobSection">
              Berikut jenis pekerjaan yang cocok dengan tipe kepribadian{" "}
              {result}
            </p>
            <>{jobsDesc[result]}</>
          </div>
        </div>
        <Footer />
      </>
    </Title>
  );
};

export default ResultPage;
