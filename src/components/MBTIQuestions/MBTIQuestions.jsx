import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Styles.css";
import ProgressBar from "react-bootstrap/ProgressBar";
import Title from "../Layout/Title";
import BG from "../../assets/Images/bg.png";

const MBTIQuestion = ({ question, onAnswerSelect, onNextQuestion }) => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const [currentQuestion, setCurrentQuestion] = useState(1);

  const handleAnswerClick = (answerId) => {
    onAnswerSelect(question.id, answerId);
    onNextQuestion();
    setCurrentQuestion(currentQuestion + 1);
  };

  const progress = Math.ceil((currentQuestion / 52) * 100);

  return (
    <Title title="Test">
      <>
        <div className="test">
          <div className="bg">
            <img
              className="bg"
              src={BG}
              alt="bg"
              width={"1444"}
              height={"700"}
            />
          </div>
          <p className="test-title">Jawab Sesuai Dengan Diri Anda!</p>
          <p className="test-subtitle">
            Pilihlah kalimat (a atau b) untuk meneruskan setiap pernyataan yang
            paling sesuai dengan diri Anda.
          </p>

          <div className="box-progress">
            <div>
              <p className="progress-test">
                Progress : {currentQuestion} soal, dari {52} soal
              </p>
            </div>
            <div className="progress-bar">
              <ProgressBar animated now={progress} label={`${progress}%`} />
            </div>
          </div>

          <div className="box-question">
            <p className="soal">{question.text}</p>
            <div className="opsi-jawaban">
              {question.options.map((option) => (
                <button
                  className="option"
                  key={option.id}
                  onClick={() => handleAnswerClick(option.id)}
                >
                  <p className="opsi">{option.text}</p>
                </button>
              ))}
            </div>
          </div>
        </div>
      </>
    </Title>
  );
};

export default MBTIQuestion;
