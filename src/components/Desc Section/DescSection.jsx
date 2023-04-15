import React from "react";
import "./Styles.css";

import mbti from "../../assets/Images/mbti-ic.png";

const DescSection = () => {
  return (
    <section id="description">
      <div className="desc-section">
        <p className="title-desc-section">
          Myers-Briggs Type Indicator
          <br />
          Untuk Tes Kepribadian
        </p>

        <div className="desc">
          <div className="sec-logo">
            <img
              className="sec-ic"
              src={mbti}
              alt={mbti}
              height={263}
              width={309}
            />
          </div>

          <div className="d-desc">
            <div>
              <p className="website-description">
                Website ini merupakan platform MBTI untuk mengetahui jenis
                pekerjaan yang sesuai dengan minat bakat yang Anda miliki. Untuk
                mengetahuinya, Anda diharuskan terlebih dahulu untuk mengerjakan
                kuisioner. Kuisioner ini nanti akan menggunakan metode MBTI.
              </p>
              <p className="website-descriptions">
                Apa itu MBTI? MBTI adalah singkatan dari The Myers-Briggs Type
                Indicator. MBTI merupakan sebuah instrumen untuk melakukan
                assesment atau tes kepribadian mandiri dan sederhana. Assesment
                ini dilakukan untuk mengetahui cara seseorang saat mengolah
                informasi, mengambil keputusan, atau memandang sebuah masalah
                yang ada. Menurut Carl Jung, manusia memiliki 4 fungsi pokok
                yaitu:{" "}
                <span style={{ color: "#000000", fontWeight: "bold" }}>
                  intuisi
                </span>
                ,{" "}
                <span style={{ color: "#000000", fontWeight: "bold" }}>
                  pengindra
                </span>
                ,{" "}
                <span style={{ color: "#000000", fontWeight: "bold" }}>
                  perasa
                </span>
                , dan{" "}
                <span style={{ color: "#000000", fontWeight: "bold" }}>
                  berpikir
                </span>
                . Yang kemudian akan dicabangkan lagi menjadi 4 rentang:
              </p>
            </div>
            <div>
              <ul className="desc-point">
                <li className="desc-point">
                  <span style={{ color: "#000000", fontWeight: "bold" }}>
                    Introvert (I)
                  </span>{" "}
                  vs.{" "}
                  <span style={{ color: "#000000", fontWeight: "bold" }}>
                    Ekstrovert (E)
                  </span>{" "}
                  – Cara seseorang memusatkan perhatiannya.
                </li>
                <li className="desc-point">
                  <span style={{ color: "#000000", fontWeight: "bold" }}>
                    Sensing (S)
                  </span>{" "}
                  vs.{" "}
                  <span style={{ color: "#000000", fontWeight: "bold" }}>
                    Intuition (N)
                  </span>{" "}
                  – Cara seseorang memahami sebuah informasi.
                </li>
                <li className="desc-point">
                  <span style={{ color: "#000000", fontWeight: "bold" }}>
                    Thinking (T)
                  </span>{" "}
                  vs.{" "}
                  <span style={{ color: "#000000", fontWeight: "bold" }}>
                    Feeling (F)
                  </span>{" "}
                  – Cara seseorang mengambil keputusan.
                </li>
                <li className="desc-point">
                  <span style={{ color: "#000000", fontWeight: "bold" }}>
                    Judging (J)
                  </span>{" "}
                  vs.{" "}
                  <span style={{ color: "#000000", fontWeight: "bold" }}>
                    Perceiving (P)
                  </span>{" "}
                  – Cara seseorang merespon dunia sekitar.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DescSection;
