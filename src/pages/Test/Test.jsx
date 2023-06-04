import React, { useState } from "react";
import MBTIQuestion from "../../components/MBTIQuestions/MBTIQuestions";
import Result from "../Result/Result";
import questions from "../../data/Questions/Questions";
const natural = require("natural");
const classifier = new natural.BayesClassifier();

const Test = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [result, setResult] = useState("");

  const handleAnswerSelect = (questionId, answerId) => {
    setSelectedAnswers({ ...selectedAnswers, [questionId]: answerId });
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      calculateMBTI();
    }
  };

  const calculateMBTI = () => {
    // Memasukkan data latih ke dalam classifier
    for (const question of questions) {
      const options = question.options.map((o) => o.text);
      const type = question.options.filter((o) => o.type).map((o) => o.type);

      for (const option of options) {
        classifier.addDocument(option, type.join(" "));
      }
    }

    // Melatih classifier dengan data latih
    classifier.train();

    // Menghitung hasil MBTI berdasarkan jawaban yang dipilih
    const selectedOptions = Object.values(selectedAnswers).map(
      (answerId) =>
        questions[currentQuestionIndex].options.find((o) => o.id === answerId)
          .text
    );

    const result = classifier.classify(selectedOptions.join(" "));
    setResult(result);
  };

  return (
    <div>
      {result ? (
        <Result result={result} />
      ) : (
        <MBTIQuestion
          question={questions[currentQuestionIndex]}
          onAnswerSelect={handleAnswerSelect}
          onNextQuestion={handleNextQuestion}
        />
      )}
    </div>
  );
};

export default Test;
