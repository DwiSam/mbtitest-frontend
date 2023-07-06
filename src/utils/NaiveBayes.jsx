import questions from "../data/Questions/Questions";

export function calculateMBTIResult(selectedAnswers) {
  const MBTIOptions = {
    I: 0,
    E: 0,
    S: 0,
    N: 0,
    T: 0,
    F: 0,
    J: 0,
    P: 0,
  };

  // Menghitung frekuensi kemunculan tiap kategori MBTI
  for (const [questionId, answerId] of Object.entries(selectedAnswers)) {
    const question = questions.find((q) => q.id === parseInt(questionId));
    const answer = question.options.find((o) => o.id === answerId);
    if (answer.type) {
      for (const t of answer.type) {
        MBTIOptions[t] += 1;
      }
    }
  }

  // Menghitung probabilitas kategori MBTI
  const totalQuestions = Object.values(selectedAnswers).length;
  const MBTIProbabilities = {
    I: MBTIOptions.I / totalQuestions,
    E: MBTIOptions.E / totalQuestions,
    S: MBTIOptions.S / totalQuestions,
    N: MBTIOptions.N / totalQuestions,
    T: MBTIOptions.T / totalQuestions,
    F: MBTIOptions.F / totalQuestions,
    J: MBTIOptions.J / totalQuestions,
    P: MBTIOptions.P / totalQuestions,
  };
  console.log("Probabilitas kategori MBTI:", MBTIProbabilities);

  // Menghitung nilai posterior probability untuk setiap kategori MBTI
  const MBTIScores = {
    ISTJ: calculatePosteriorProbability(MBTIProbabilities, [
      "I",
      "S",
      "T",
      "J",
    ]),
    ISFJ: calculatePosteriorProbability(MBTIProbabilities, [
      "I",
      "S",
      "F",
      "J",
    ]),
    INFJ: calculatePosteriorProbability(MBTIProbabilities, [
      "I",
      "N",
      "F",
      "J",
    ]),
    INTJ: calculatePosteriorProbability(MBTIProbabilities, [
      "I",
      "N",
      "T",
      "J",
    ]),
    ISTP: calculatePosteriorProbability(MBTIProbabilities, [
      "I",
      "S",
      "T",
      "P",
    ]),
    ISFP: calculatePosteriorProbability(MBTIProbabilities, [
      "I",
      "S",
      "F",
      "P",
    ]),
    INFP: calculatePosteriorProbability(MBTIProbabilities, [
      "I",
      "N",
      "F",
      "P",
    ]),
    INTP: calculatePosteriorProbability(MBTIProbabilities, [
      "I",
      "N",
      "T",
      "P",
    ]),
    ESTP: calculatePosteriorProbability(MBTIProbabilities, [
      "E",
      "S",
      "T",
      "P",
    ]),
    ESFP: calculatePosteriorProbability(MBTIProbabilities, [
      "E",
      "S",
      "F",
      "P",
    ]),
    ENFP: calculatePosteriorProbability(MBTIProbabilities, [
      "E",
      "N",
      "F",
      "P",
    ]),
    ENTP: calculatePosteriorProbability(MBTIProbabilities, [
      "E",
      "N",
      "T",
      "P",
    ]),
    ESTJ: calculatePosteriorProbability(MBTIProbabilities, [
      "E",
      "S",
      "T",
      "J",
    ]),
    ESFJ: calculatePosteriorProbability(MBTIProbabilities, [
      "E",
      "S",
      "F",
      "J",
    ]),
    ENFJ: calculatePosteriorProbability(MBTIProbabilities, [
      "E",
      "N",
      "F",
      "J",
    ]),
    ENTJ: calculatePosteriorProbability(MBTIProbabilities, [
      "E",
      "N",
      "T",
      "J",
    ]),
  };
  console.log("Nilai posterior probability:", MBTIScores);

  // Menentukan hasil MBTI berdasarkan nilai posterior probability terbesar
  const result = Object.keys(MBTIScores).reduce((a, b) =>
    MBTIScores[a] > MBTIScores[b] ? a : b
  );
  console.log(result);
  return result;
}

// Menghitung nilai posterior probability berdasarkan probabilitas kategori MBTI dan jawaban yang dipilih
function calculatePosteriorProbability(MBTIProbabilities, categories) {
  let score = 1;
  for (const category of categories) {
    score *= MBTIProbabilities[category];
  }
  return score;
}
