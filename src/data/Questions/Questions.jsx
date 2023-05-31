const questions = [
  {
    id: 1,
    text: "1. Ketika masuk ke dalam lingkungan yang baru saya cenderung ...",
    options: [
      { id: 1, text: "a. lebih banyak mengamati", type: ["I"] },
      { id: 2, text: "b. berkenalan dengan orang lain", type: ["E"] },
    ],
  },
  {
    id: 2,
    text: "2. Saya lebih suka membuat tujuan yang bersifat ...",
    options: [
      { id: 1, text: "a. jangka panjang", type: ["N"] },
      { id: 2, text: "b. jangka pendek", type: ["S"] },
    ],
  },
  {
    id: 3,
    text: "3. Jika menghadapi dua pendapat yang berbeda, saya akan mengambil keputusan setelah ...",
    options: [
      {
        id: 1,
        text: "a. mengetahui sebab dan akibat dari suatu permasalahan",
        type: ["T"],
      },
      {
        id: 2,
        text: "b. memahami cara pandang kedua pihak yang berbeda pendapat",
        type: ["F"],
      },
    ],
  },
  {
    id: 4,
    text: "4. Saya lebih memilih untuk menjalani ...",
    options: [
      { id: 1, text: "a. kehidupan yang punya tujuan", type: ["J"] },
      { id: 2, text: "b. kehidupan yang bebas", type: ["P"] },
    ],
  },
  {
    id: 5,
    text: "5. Dalam kondisi santai, saya lebih tertarik memperhatikan ...",
    options: [
      { id: 1, text: "a. gambaran yang muncul di benak saya", type: ["I"] },
      { id: 2, text: "b. apa yang terjadi di sekitar saya", type: ["E"] },
    ],
  },
  {
    id: 6,
    text: "6. Saya lebih suka memikirkan ...",
    options: [
      {
        id: 1,
        text: "a. kemungkinan yang akan terjadi di masa depan",
        type: ["N"],
      },
      { id: 2, text: "b. apa yang sedang terjadi saat ini", type: ["S"] },
    ],
  },
  {
    id: 7,
    text: "7. Saya akan lebih berpihak kepada orang yang ...",
    options: [
      {
        id: 1,
        text: "a. dapat memberikan alasan yang masuk akal",
        type: ["T"],
      },
      {
        id: 2,
        text: "b. dapat memberikan alasan yang menyentuh perasaan",
        type: ["F"],
      },
    ],
  },
  {
    id: 8,
    text: "8. Saya lebih menyukai lingkungan ...",
    options: [
      { id: 1, text: "a. yang menegakkan aturan", type: ["J"] },
      { id: 2, text: "b. yang memberi kebebasan", type: ["P"] },
    ],
  },
  {
    id: 9,
    text: "9. Saya lebih bersemangat untuk ...",
    options: [
      { id: 1, text: "a. membayangkan sesuatu yang menyenangkan", type: ["I"] },
      { id: 2, text: "b. bertemu dengan orang baru", type: ["E"] },
    ],
  },
  {
    id: 10,
    text: "10. Saya lebih bersemangat jika berbicara ...",
    options: [
      { id: 1, text: "a. tentang kemungkinan di masa depan", type: ["N"] },
      {
        id: 2,
        text: "b. tentang kejadian yang sedang berlangsung",
        type: ["S"],
      },
    ],
  },
  {
    id: 11,
    text: "11. Dalam memilih pakaian, saya lebih mempertimbangkan ...",
    options: [
      { id: 1, text: "a. fungsi dari pakaian tersebut", type: ["T"] },
      { id: 2, text: "b. model dari pakaian tersebut", type: ["F"] },
    ],
  },
  {
    id: 12,
    text: "12. Jika saya menjadi ketua kelompok, saya cenderung ...",
    options: [
      { id: 1, text: "a. menerapkan kedisiplinan", type: ["J"] },
      { id: 2, text: "b. memberikan kebebasan", type: ["P"] },
    ],
  },
  {
    id: 13,
    text: "13. Saya lebih sering menghabiskan waktu untuk ...",
    options: [
      {
        id: 1,
        text: "a. mendalami apa yang saya pikirkan/rasakan",
        type: ["I"],
      },
      { id: 2, text: "b. mengikuti kegiatan bersama orang lain", type: ["E"] },
    ],
  },
  {
    id: 14,
    text: "14. Saya lebih menyukai kegiatan yang mengandalkan ...",
    options: [
      { id: 1, text: "a. non fisik (membaca,merenung, dsb)", type: ["N"] },
      { id: 2, text: "b. fisik (olaharaga, seni, dsb)", type: ["S"] },
    ],
  },
  {
    id: 15,
    text: "15. Bagi saya kebenaran adalah sesuatu yang ...",
    options: [
      { id: 1, text: "a. bersifat objektif", type: ["T"] },
      { id: 2, text: "b. bersifat relatif", type: ["F"] },
    ],
  },
  {
    id: 16,
    text: "16. Jika saya menjadi ketua kelompok, saya cenderung ...",
    options: [
      { id: 1, text: "a. menerapkan kedisiplinan", type: ["J"] },
      { id: 2, text: "b. memberikan kebebasan", type: ["P"] },
    ],
  },
  {
    id: 17,
    text: "17. Saya lebih nyaman melakukan tugas yang ...",
    options: [
      { id: 1, text: "a. membutuhkan konsentrasi", type: ["I"] },
      { id: 2, text: "b. melibatkan banyak orang", type: ["E"] },
    ],
  },
  {
    id: 18,
    text: "18. Ketika menonton televisi, saya lebih tertarik untuk menyaksikan program acara ...",
    options: [
      { id: 1, text: "a. berita", type: ["N"] },
      { id: 2, text: "b. olahraga", type: ["S"] },
    ],
  },
  {
    id: 19,
    text: "19. Saya lebih sering mengambil keputusan dengan mempertimbangkan ...",
    options: [
      { id: 1, text: "a. bukti-bukti yang ada", type: ["T"] },
      { id: 2, text: "b. situasi dan kondisi yang ada", type: ["F"] },
    ],
  },
  {
    id: 20,
    text: "20. Saya lebih menyukai karakter tokoh yang ...",
    options: [
      { id: 1, text: "a. disiplin dan profesional", type: ["J"] },
      { id: 2, text: "b. kreatif dan inovatif", type: ["P"] },
    ],
  },

  {
    id: 21,
    text: "21. Saya lebih nyaman menyampaikan informasi dengan cara ...",
    options: [
      { id: 1, text: "a. mengetik pesan digital (chat)", type: ["I"] },
      { id: 2, text: "b. berbicara langsung", type: ["E"] },
    ],
  },
  {
    id: 22,
    text: "22. Saya dapat lebih mudah untuk ...",
    options: [
      { id: 1, text: "a. mengimajinasikan sesuatu yang baru", type: ["N"] },
      { id: 2, text: "b. mengamati suatu objek dengan detil", type: ["S"] },
    ],
  },
  {
    id: 23,
    text: "23. Saya lebih suka membuat suatu karya yang ...",
    options: [
      { id: 1, text: "a. berguna untuk orang lain", type: ["T"] },
      {
        id: 2,
        text: "b. disukai oleh orang lain",
        type: ["F"],
      },
    ],
  },
  {
    id: 24,
    text: "24. Saya menciptakan sesuatu yang ...",
    options: [
      { id: 1, text: "a. berguna untuk orang lain", type: ["J"] },
      { id: 2, text: "b. disukai oleh orang lain", type: ["P"] },
    ],
  },
  {
    id: 25,
    text: "25. Saya dapat banyak menghabiskan waktu ketika ...",
    options: [
      { id: 1, text: "a. membaca buku", type: ["I"] },
      { id: 2, text: "b. berbicara dengan orang lain", type: ["E"] },
    ],
  },
  {
    id: 26,
    text: "26. Saya lebih menyukai pekerjaan yang mengandalkan ...",
    options: [
      { id: 1, text: "a. kreativitas", type: ["N"] },
      { id: 2, text: "b. ketelitian", type: ["S"] },
    ],
  },
  {
    id: 27,
    text: "27. Jika menjadi seorang pemimpin saya akan ...",
    options: [
      { id: 1, text: "a. bersikap seadil-adilnya", type: ["T"] },
      { id: 2, text: "b. menciptakan kedamaian", type: ["F"] },
    ],
  },
  {
    id: 28,
    text: "28. Agar tidak terlibat suatu masalah, saya akan ...",
    options: [
      { id: 1, text: "a. memperhatikan peraturan yang berlaku", type: ["J"] },
      { id: 2, text: "b. mencari informasi sebanyak mungkin", type: ["P"] },
    ],
  },
  {
    id: 29,
    text: "29. Saya merasa lebih nyaman ketika ...",
    options: [
      { id: 1, text: "a. mengerjakan tugas mandiri", type: ["I"] },
      { id: 2, text: "b. mengerjakan tugas kelompok", type: ["E"] },
    ],
  },
  {
    id: 30,
    text: "30. Saya lebih mudah memahami pelajaran dengan ...",
    options: [
      { id: 1, text: "a. membuat peta pikiran", type: ["N"] },
      { id: 2, text: "b. membuat catatan yang detil", type: ["S"] },
    ],
  },
  {
    id: 31,
    text: "31. Saya lebih suka dipandang sebagai orang yang ...",
    options: [
      { id: 1, text: "a. tegas dan disiplin", type: ["T"] },
      { id: 2, text: "b. ramah dan bersahabat", type: ["F"] },
    ],
  },
  {
    id: 32,
    text: "32. Saya percaya bahwa saya akan lebih berhasil jika ...",
    options: [
      { id: 1, text: "a. fokus pada tujuan", type: ["J"] },
      { id: 2, text: "b. memiliki banyak pengalaman", type: ["P"] },
    ],
  },
  {
    id: 33,
    text: "33. Saya merasa lebih bersemangat setelah ...",
    options: [
      { id: 1, text: "a. meluangkan waktu untuk diri sendiri", type: ["I"] },
      { id: 2, text: "b. bertemu dengan banyak orang", type: ["E"] },
    ],
  },
  {
    id: 34,
    text: "34. Menurut orang lain saya memiliki kelebihan dalam ...",
    options: [
      { id: 1, text: "a. menciptakan sesuatu", type: ["N"] },
      { id: 2, text: "b. mengingat sesuatu", type: ["S"] },
    ],
  },
  {
    id: 35,
    text: "35. Saya lebih suka menjelaskan suatu kejadian ...",
    options: [
      { id: 1, text: "a. sesuai kronologi (urutan kejadian)", type: ["T"] },
      { id: 2, text: "b. dimulai dari hal yang menarik", type: ["F"] },
    ],
  },
  {
    id: 36,
    text: "36. Saya akan lebih bersemangat dalam ...",
    options: [
      { id: 1, text: "a. meraih suatu prestasi", type: ["J"] },
      { id: 2, text: "b. menjelajah ke tempat-tempat baru", type: ["P"] },
    ],
  },
  {
    id: 37,
    text: "37. Pilihlah kata (a atau b) yang paling mencerminkan diri Anda",
    options: [
      { id: 1, text: "a. Privasi", type: ["I"] },
      { id: 2, text: "b. Sosialisasi", type: ["E"] },
    ],
  },
  {
    id: 38,
    text: "38. Pilihlah kata (a atau b) yang paling mencerminkan diri Anda",
    options: [
      { id: 1, text: "a. Masa Depan", type: ["N"] },
      { id: 2, text: "b. Saat Ini", type: ["S"] },
    ],
  },
  {
    id: 39,
    text: "39. Pilihlah kata (a atau b) yang paling mencerminkan diri Anda",
    options: [
      { id: 1, text: "a. Tercerahkan", type: ["T"] },
      { id: 2, text: "b. Terhibur", type: ["F"] },
    ],
  },
  {
    id: 40,
    text: "40. Pilihlah kata (a atau b) yang paling mencerminkan diri Anda",
    options: [
      { id: 1, text: "a. Efektif", type: ["J"] },
      { id: 2, text: "b. Eksploratif", type: ["P"] },
    ],
  },
  {
    id: 41,
    text: "41. Pilihlah kata (a atau b) yang paling mencerminkan diri Anda",
    options: [
      { id: 1, text: "a. Kontemplatif", type: ["I"] },
      { id: 2, text: "b. Kesenangan", type: ["E"] },
    ],
  },
  {
    id: 42,
    text: "42. Pilihlah kata (a atau b) yang paling mencerminkan diri Anda",
    options: [
      { id: 1, text: "a. Visi", type: ["N"] },
      { id: 2, text: "b. Aksi", type: ["S"] },
    ],
  },
  {
    id: 43,
    text: "43. Pilihlah kata (a atau b) yang paling mencerminkan diri Anda",
    options: [
      { id: 1, text: "a. Sains", type: ["T"] },
      { id: 2, text: "b. Seni", type: ["F"] },
    ],
  },
  {
    id: 44,
    text: "44. Pilihlah kata (a atau b) yang paling mencerminkan diri Anda",
    options: [
      { id: 1, text: "a. Prestatif", type: ["J"] },
      { id: 2, text: "b. Adaptif", type: ["P"] },
    ],
  },
  {
    id: 45,
    text: "45. Pilihlah kata (a atau b) yang paling mencerminkan diri Anda",
    options: [
      { id: 1, text: "a. Ketenangan", type: ["I"] },
      { id: 2, text: "b. Kesenangan", type: ["E"] },
    ],
  },
  {
    id: 46,
    text: "46. Pilihlah kata (a atau b) yang paling mencerminkan diri Anda",
    options: [
      { id: 1, text: "a. Ide", type: ["N"] },
      { id: 2, text: "b. Fakta", type: ["S"] },
    ],
  },
  {
    id: 47,
    text: "47. Pilihlah kata (a atau b) yang paling mencerminkan diri Anda",
    options: [
      { id: 1, text: "a. Peraturan", type: ["T"] },
      { id: 2, text: "b. Perasaan", type: ["F"] },
    ],
  },
  {
    id: 48,
    text: "48. Pilihlah kata (a atau b) yang paling mencerminkan diri Anda",
    options: [
      { id: 1, text: "a. Kepemimpinan", type: ["J"] },
      { id: 2, text: "b. Kebebasan Ekspresi", type: ["P"] },
    ],
  },
  {
    id: 49,
    text: "49. Pilihlah kata (a atau b) yang paling mencerminkan diri Anda",
    options: [
      { id: 1, text: "a. Konsentrasi", type: ["I"] },
      { id: 2, text: "b. Kerjasama", type: ["E"] },
    ],
  },
  {
    id: 50,
    text: "50. Pilihlah kata (a atau b) yang paling mencerminkan diri Anda",
    options: [
      { id: 1, text: "a. Kualitas", type: ["N"] },
      { id: 2, text: "b. Kuantitas", type: ["S"] },
    ],
  },
  {
    id: 51,
    text: "51. Pilihlah kata (a atau b) yang paling mencerminkan diri Anda",
    options: [
      { id: 1, text: "a. Keteraturan", type: ["T"] },
      { id: 2, text: "b. Kenyamanan", type: ["F"] },
    ],
  },
  {
    id: 52,
    text: "52. Pilihlah kata (a atau b) yang paling mencerminkan diri Anda",
    options: [
      { id: 1, text: "a. Perencanaan", type: ["J"] },
      { id: 2, text: "b. Spontanitas", type: ["P"] },
    ],
  },
];

export default questions;
