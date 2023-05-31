import Carousel from "react-bootstrap/Carousel";
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

const JobsDesc = {
  ISTJ: (
    <>
      <Carousel className="jobCarousel" variant="dark">
        <Carousel.Item>
          <div className="jobs-box">
            <div className="title-job-box">
              <img className="jobs-ic" src={comptinf} alt="comptinf" />
              <p className="title-jobs">{jobData[7].title}</p>
            </div>
            <div className="desc-job-box">
              <p className="description">
                {jobData[7].description}
                <br />
                <br />
                <span style={{ color: "#000000", fontWeight: "bold" }}>
                  Tugas & Tanggung Jawab :
                </span>
              </p>
              <div>
                <ul className="description-points">
                  {jobData[7].tasks.map((task, index) => (
                    <li key={index} className="description-point">
                      {task}
                    </li>
                  ))}
                </ul>
              </div>
              <p className="description">
                <span style={{ color: "#000000", fontWeight: "bold" }}>
                  Keterampilan yang dibutuhkan :
                </span>
                <br />
                {jobData[7].skills}
              </p>
              <p className="description">
                <span style={{ color: "#000000", fontWeight: "bold" }}>
                  Mata kuliah yang harus kamu ambil :
                </span>
                <br />
                {jobData[7].matkul}
              </p>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="jobs-box">
            <div className="title-job-box">
              <img className="jobs-ic" src={sofdev} alt="sofdev" />
              <p className="title-jobs">{jobData[2].title}</p>
            </div>
            <div className="desc-job-box">
              <p className="description">
                {jobData[2].description}
                <br />
                <br />
                <span style={{ color: "#000000", fontWeight: "bold" }}>
                  Tugas & Tanggung Jawab :
                </span>
              </p>
              <div>
                <ul className="description-points">
                  {jobData[2].tasks.map((task, index) => (
                    <li key={index} className="description-point">
                      {task}
                    </li>
                  ))}
                </ul>
              </div>
              <p className="description">
                <span style={{ color: "#000000", fontWeight: "bold" }}>
                  Keterampilan yang dibutuhkan :
                </span>
                <br />
                {jobData[2].skills}
              </p>
              <p className="description">
                <span style={{ color: "#000000", fontWeight: "bold" }}>
                  Mata kuliah yang harus kamu ambil :
                </span>
                <br />
                {jobData[2].matkul}
              </p>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="jobs-box">
            <div className="title-job-box">
              <img className="jobs-ic" src={dba} alt="dba" />
              <p className="title-jobs">{jobData[6].title}</p>
            </div>
            <div className="desc-job-box">
              <p className="description">
                {jobData[6].description}
                <br />
                <br />
                <span style={{ color: "#000000", fontWeight: "bold" }}>
                  Tugas & Tanggung Jawab :
                </span>
              </p>
              <div>
                <ul className="description-points">
                  {jobData[6].tasks.map((task, index) => (
                    <li key={index} className="description-point">
                      {task}
                    </li>
                  ))}
                </ul>
              </div>
              <p className="description">
                <span style={{ color: "#000000", fontWeight: "bold" }}>
                  Keterampilan yang dibutuhkan :
                </span>
                <br />
                {jobData[6].skills}
              </p>
              <p className="description">
                <span style={{ color: "#000000", fontWeight: "bold" }}>
                  Mata kuliah yang harus kamu ambil :
                </span>
                <br />
                {jobData[6].matkul}
              </p>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="jobs-box">
            <div className="title-job-box">
              <img className="jobs-ic" src={compnet} alt="compnet" />
              <p className="title-jobs">{jobData[8].title}</p>
            </div>
            <div className="desc-job-box">
              <p className="description">
                {jobData[8].description}
                <br />
                <br />
                <span style={{ color: "#000000", fontWeight: "bold" }}>
                  Tugas & Tanggung Jawab :
                </span>
              </p>
              <div>
                <ul className="description-points">
                  {jobData[8].tasks.map((task, index) => (
                    <li key={index} className="description-point">
                      {task}
                    </li>
                  ))}
                </ul>
              </div>
              <p className="description">
                <span style={{ color: "#000000", fontWeight: "bold" }}>
                  Keterampilan yang dibutuhkan :
                </span>
                <br />
                {jobData[8].skills}
              </p>
              <p className="description">
                <span style={{ color: "#000000", fontWeight: "bold" }}>
                  Mata kuliah yang harus kamu ambil :
                </span>
                <br />
                {jobData[8].matkul}
              </p>
            </div>
          </div>
        </Carousel.Item>
      </Carousel>
    </>
  ),
  ISTP: (
    <>
      <Carousel className="jobCarousel" variant="dark">
        <Carousel.Item>
          <div className="jobs-box">
            <div className="title-job-box">
              <img className="jobs-ic" src={comptinf} alt="comptinf" />
              <p className="title-jobs">{jobData[7].title}</p>
            </div>
            <div className="desc-job-box">
              <p className="description">
                {jobData[7].description}
                <br />
                <br />
                <span style={{ color: "#000000", fontWeight: "bold" }}>
                  Tugas & Tanggung Jawab :
                </span>
              </p>
              <div>
                <ul className="description-points">
                  {jobData[7].tasks.map((task, index) => (
                    <li key={index} className="description-point">
                      {task}
                    </li>
                  ))}
                </ul>
              </div>
              <p className="description">
                <span style={{ color: "#000000", fontWeight: "bold" }}>
                  Keterampilan yang dibutuhkan :
                </span>
                <br />
                {jobData[7].skills}
              </p>
              <p className="description">
                <span style={{ color: "#000000", fontWeight: "bold" }}>
                  Mata kuliah yang harus kamu ambil :
                </span>
                <br />
                {jobData[7].matkul}
              </p>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="jobs-box">
            <div className="title-job-box">
              <img className="jobs-ic" src={netcomp} alt="netcomp" />
              <p className="title-jobs">{jobData[9].title}</p>
            </div>
            <div className="desc-job-box">
              <p className="description">
                {jobData[9].description}
                <br />
                <br />
                <span style={{ color: "#000000", fontWeight: "bold" }}>
                  Tugas & Tanggung Jawab :
                </span>
              </p>
              <div>
                <ul className="description-points">
                  {jobData[9].tasks.map((task, index) => (
                    <li key={index} className="description-point">
                      {task}
                    </li>
                  ))}
                </ul>
              </div>
              <p className="description">
                <span style={{ color: "#000000", fontWeight: "bold" }}>
                  Keterampilan yang dibutuhkan :
                </span>
                <br />
                {jobData[9].skills}
              </p>
              <p className="description">
                <span style={{ color: "#000000", fontWeight: "bold" }}>
                  Mata kuliah yang harus kamu ambil :
                </span>
                <br />
                {jobData[9].matkul}
              </p>
            </div>
          </div>
        </Carousel.Item>
      </Carousel>
    </>
  ),
  ISFJ: (
    <>
      <Carousel className="jobCarousel" variant="dark">
        <Carousel.Item>
          <div className="jobs-box">
            <div className="title-job-box">
              <img className="jobs-ic" src={netcomp} alt="netcomp" />
              <p className="title-jobs">{jobData[9].title}</p>
            </div>
            <div className="desc-job-box">
              <p className="description">
                {jobData[9].description}
                <br />
                <br />
                <span style={{ color: "#000000", fontWeight: "bold" }}>
                  Tugas & Tanggung Jawab :
                </span>
              </p>
              <div>
                <ul className="description-points">
                  {jobData[9].tasks.map((task, index) => (
                    <li key={index} className="description-point">
                      {task}
                    </li>
                  ))}
                </ul>
              </div>
              <p className="description">
                <span style={{ color: "#000000", fontWeight: "bold" }}>
                  Keterampilan yang dibutuhkan :
                </span>
                <br />
                {jobData[9].skills}
              </p>
              <p className="description">
                <span style={{ color: "#000000", fontWeight: "bold" }}>
                  Mata kuliah yang harus kamu ambil :
                </span>
                <br />
                {jobData[9].matkul}
              </p>
            </div>
          </div>
        </Carousel.Item>
      </Carousel>
    </>
  ),
  ISFP: (
    <>
      <Carousel className="jobCarousel" variant="dark">
        <Carousel.Item>
          <div className="jobs-box">
            <div className="title-job-box">
              <img className="jobs-ic" src={compsup} alt="compsup" />
              <p className="title-jobs">{jobData[5].title}</p>
            </div>
            <div className="desc-job-box">
              <p className="description">
                {jobData[5].description}
                <br />
                <br />
                <span style={{ color: "#000000", fontWeight: "bold" }}>
                  Tugas & Tanggung Jawab :
                </span>
              </p>
              <div>
                <ul className="description-points">
                  {jobData[5].tasks.map((task, index) => (
                    <li key={index} className="description-point">
                      {task}
                    </li>
                  ))}
                </ul>
              </div>
              <p className="description">
                <span style={{ color: "#000000", fontWeight: "bold" }}>
                  Keterampilan yang dibutuhkan :
                </span>
                <br />
                {jobData[5].skills}
              </p>
              <p className="description">
                <span style={{ color: "#000000", fontWeight: "bold" }}>
                  Mata kuliah yang harus kamu ambil :
                </span>
                <br />
                {jobData[5].matkul}
              </p>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="jobs-box">
            <div className="title-job-box">
              <img className="jobs-ic" src={infsec} alt="infsec" />
              <p className="title-jobs">{jobData[3].title}</p>
            </div>
            <div className="desc-job-box">
              <p className="description">
                {jobData[3].description}
                <br />
                <br />
                <span style={{ color: "#000000", fontWeight: "bold" }}>
                  Tugas & Tanggung Jawab :
                </span>
              </p>
              <div>
                <ul className="description-points">
                  {jobData[3].tasks.map((task, index) => (
                    <li key={index} className="description-point">
                      {task}
                    </li>
                  ))}
                </ul>
              </div>
              <p className="description">
                <span style={{ color: "#000000", fontWeight: "bold" }}>
                  Keterampilan yang dibutuhkan :
                </span>
                <br />
                {jobData[3].skills}
              </p>
              <p className="description">
                <span style={{ color: "#000000", fontWeight: "bold" }}>
                  Mata kuliah yang harus kamu ambil :
                </span>
                <br />
                {jobData[3].matkul}
              </p>
            </div>
          </div>
        </Carousel.Item>
      </Carousel>
    </>
  ),
  INFJ: (
    <>
      <Carousel className="jobCarousel" variant="dark">
        <Carousel.Item>
          <div className="jobs-box">
            <div className="title-job-box">
              <img className="jobs-ic" src={webdev} alt="webdev" />
              <p className="title-jobs">{jobData[0].title}</p>
            </div>
            <div className="desc-job-box">
              <p className="description">
                {jobData[0].description}
                <br />
                <br />
                <span style={{ color: "#000000", fontWeight: "bold" }}>
                  Tugas & Tanggung Jawab :
                </span>
              </p>
              <div>
                <ul className="description-points">
                  {jobData[0].tasks.map((task, index) => (
                    <li key={index} className="description-point">
                      {task}
                    </li>
                  ))}
                </ul>
              </div>
              <p className="description">
                <span style={{ color: "#000000", fontWeight: "bold" }}>
                  Keterampilan yang dibutuhkan :
                </span>
                <br />
                {jobData[0].skills}
              </p>
              <p className="description">
                <span style={{ color: "#000000", fontWeight: "bold" }}>
                  Mata kuliah yang harus kamu ambil :
                </span>
                <br />
                {jobData[0].matkul}
              </p>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="jobs-box">
            <div className="title-job-box">
              <img className="jobs-ic" src={sofdev} alt="sofdev" />
              <p className="title-jobs">{jobData[2].title}</p>
            </div>
            <div className="desc-job-box">
              <p className="description">
                {jobData[2].description}
                <br />
                <br />
                <span style={{ color: "#000000", fontWeight: "bold" }}>
                  Tugas & Tanggung Jawab :
                </span>
              </p>
              <div>
                <ul className="description-points">
                  {jobData[2].tasks.map((task, index) => (
                    <li key={index} className="description-point">
                      {task}
                    </li>
                  ))}
                </ul>
              </div>
              <p className="description">
                <span style={{ color: "#000000", fontWeight: "bold" }}>
                  Keterampilan yang dibutuhkan :
                </span>
                <br />
                {jobData[2].skills}
              </p>
              <p className="description">
                <span style={{ color: "#000000", fontWeight: "bold" }}>
                  Mata kuliah yang harus kamu ambil :
                </span>
                <br />
                {jobData[2].matkul}
              </p>
            </div>
          </div>
        </Carousel.Item>
      </Carousel>
    </>
  ),
  INFP: (
    <>
      <Carousel className="jobCarousel" variant="dark">
        <Carousel.Item>
          <div className="jobs-box">
            <div className="title-job-box">
              <img className="jobs-ic" src={compsup} alt="compsup" />
              <p className="title-jobs">{jobData[5].title}</p>
            </div>
            <div className="desc-job-box">
              <p className="description">
                {jobData[5].description}
                <br />
                <br />
                <span style={{ color: "#000000", fontWeight: "bold" }}>
                  Tugas & Tanggung Jawab :
                </span>
              </p>
              <div>
                <ul className="description-points">
                  {jobData[5].tasks.map((task, index) => (
                    <li key={index} className="description-point">
                      {task}
                    </li>
                  ))}
                </ul>
              </div>
              <p className="description">
                <span style={{ color: "#000000", fontWeight: "bold" }}>
                  Keterampilan yang dibutuhkan :
                </span>
                <br />
                {jobData[5].skills}
              </p>
              <p className="description">
                <span style={{ color: "#000000", fontWeight: "bold" }}>
                  Mata kuliah yang harus kamu ambil :
                </span>
                <br />
                {jobData[5].matkul}
              </p>
            </div>
          </div>
        </Carousel.Item>
      </Carousel>
    </>
  ),
  INTJ: (
    <>
      <Carousel className="jobCarousel" variant="dark">
        <Carousel.Item>
          <div className="jobs-box">
            <div className="title-job-box">
              <img className="jobs-ic" src={systsoft} alt="systsoft" />
              <p className="title-jobs">{jobData[4].title}</p>
            </div>
            <div className="desc-job-box">
              <p className="description">
                {jobData[4].description}
                <br />
                <br />
                <span style={{ color: "#000000", fontWeight: "bold" }}>
                  Tugas & Tanggung Jawab :
                </span>
              </p>
              <div>
                <ul className="description-points">
                  {jobData[4].tasks.map((task, index) => (
                    <li key={index} className="description-point">
                      {task}
                    </li>
                  ))}
                </ul>
              </div>
              <p className="description">
                <span style={{ color: "#000000", fontWeight: "bold" }}>
                  Keterampilan yang dibutuhkan :
                </span>
                <br />
                {jobData[4].skills}
              </p>
              <p className="description">
                <span style={{ color: "#000000", fontWeight: "bold" }}>
                  Mata kuliah yang harus kamu ambil :
                </span>
                <br />
                {jobData[4].matkul}
              </p>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="jobs-box">
            <div className="title-job-box">
              <img className="jobs-ic" src={compnet} alt="compnet" />
              <p className="title-jobs">{jobData[8].title}</p>
            </div>
            <div className="desc-job-box">
              <p className="description">
                {jobData[8].description}
                <br />
                <br />
                <span style={{ color: "#000000", fontWeight: "bold" }}>
                  Tugas & Tanggung Jawab :
                </span>
              </p>
              <div>
                <ul className="description-points">
                  {jobData[8].tasks.map((task, index) => (
                    <li key={index} className="description-point">
                      {task}
                    </li>
                  ))}
                </ul>
              </div>
              <p className="description">
                <span style={{ color: "#000000", fontWeight: "bold" }}>
                  Keterampilan yang dibutuhkan :
                </span>
                <br />
                {jobData[8].skills}
              </p>
              <p className="description">
                <span style={{ color: "#000000", fontWeight: "bold" }}>
                  Mata kuliah yang harus kamu ambil :
                </span>
                <br />
                {jobData[8].matkul}
              </p>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="jobs-box">
            <div className="title-job-box">
              <img className="jobs-ic" src={comptinf} alt="comptinf" />
              <p className="title-jobs">{jobData[7].title}</p>
            </div>
            <div className="desc-job-box">
              <p className="description">
                {jobData[7].description}
                <br />
                <br />
                <span style={{ color: "#000000", fontWeight: "bold" }}>
                  Tugas & Tanggung Jawab :
                </span>
              </p>
              <div>
                <ul className="description-points">
                  {jobData[7].tasks.map((task, index) => (
                    <li key={index} className="description-point">
                      {task}
                    </li>
                  ))}
                </ul>
              </div>
              <p className="description">
                <span style={{ color: "#000000", fontWeight: "bold" }}>
                  Keterampilan yang dibutuhkan :
                </span>
                <br />
                {jobData[7].skills}
              </p>
              <p className="description">
                <span style={{ color: "#000000", fontWeight: "bold" }}>
                  Mata kuliah yang harus kamu ambil :
                </span>
                <br />
                {jobData[7].matkul}
              </p>
            </div>
          </div>
        </Carousel.Item>
      </Carousel>
    </>
  ),
  INTP: (
    <>
      <Carousel className="jobCarousel" variant="dark">
        <Carousel.Item>
          <div className="jobs-box">
            <div className="title-job-box">
              <img className="jobs-ic" src={comptinf} alt="comptinf" />
              <p className="title-jobs">{jobData[7].title}</p>
            </div>
            <div className="desc-job-box">
              <p className="description">
                {jobData[7].description}
                <br />
                <br />
                <span style={{ color: "#000000", fontWeight: "bold" }}>
                  Tugas & Tanggung Jawab :
                </span>
              </p>
              <div>
                <ul className="description-points">
                  {jobData[7].tasks.map((task, index) => (
                    <li key={index} className="description-point">
                      {task}
                    </li>
                  ))}
                </ul>
              </div>
              <p className="description">
                <span style={{ color: "#000000", fontWeight: "bold" }}>
                  Keterampilan yang dibutuhkan :
                </span>
                <br />
                {jobData[7].skills}
              </p>
              <p className="description">
                <span style={{ color: "#000000", fontWeight: "bold" }}>
                  Mata kuliah yang harus kamu ambil :
                </span>
                <br />
                {jobData[7].matkul}
              </p>
            </div>
          </div>
        </Carousel.Item>
      </Carousel>
    </>
  ),
  ESTJ: (
    <>
      <Carousel className="jobCarousel" variant="dark">
        <Carousel.Item>
          <div className="jobs-box">
            <div className="title-job-box">
              <img className="jobs-ic" src={dba} alt="dba" />
              <p className="title-jobs">{jobData[6].title}</p>
            </div>
            <div className="desc-job-box">
              <p className="description">
                {jobData[6].description}
                <br />
                <br />
                <span style={{ color: "#000000", fontWeight: "bold" }}>
                  Tugas & Tanggung Jawab :
                </span>
              </p>
              <div>
                <ul className="description-points">
                  {jobData[6].tasks.map((task, index) => (
                    <li key={index} className="description-point">
                      {task}
                    </li>
                  ))}
                </ul>
              </div>
              <p className="description">
                <span style={{ color: "#000000", fontWeight: "bold" }}>
                  Keterampilan yang dibutuhkan :
                </span>
                <br />
                {jobData[6].skills}
              </p>
              <p className="description">
                <span style={{ color: "#000000", fontWeight: "bold" }}>
                  Mata kuliah yang harus kamu ambil :
                </span>
                <br />
                {jobData[6].matkul}
              </p>
            </div>
          </div>
        </Carousel.Item>

        <Carousel.Item>
          <div className="jobs-box">
            <div className="title-job-box">
              <img className="jobs-ic" src={netcomp} alt="netcomp" />
              <p className="title-jobs">{jobData[9].title}</p>
            </div>
            <div className="desc-job-box">
              <p className="description">
                {jobData[9].description}
                <br />
                <br />
                <span style={{ color: "#000000", fontWeight: "bold" }}>
                  Tugas & Tanggung Jawab :
                </span>
              </p>
              <div>
                <ul className="description-points">
                  {jobData[9].tasks.map((task, index) => (
                    <li key={index} className="description-point">
                      {task}
                    </li>
                  ))}
                </ul>
              </div>
              <p className="description">
                <span style={{ color: "#000000", fontWeight: "bold" }}>
                  Keterampilan yang dibutuhkan :
                </span>
                <br />
                {jobData[9].skills}
              </p>
              <p className="description">
                <span style={{ color: "#000000", fontWeight: "bold" }}>
                  Mata kuliah yang harus kamu ambil :
                </span>
                <br />
                {jobData[9].matkul}
              </p>
            </div>
          </div>
        </Carousel.Item>
      </Carousel>
    </>
  ),
  ESTP: (
    <>
      <Carousel className="jobCarousel" variant="dark">
        <Carousel.Item>
          <div className="jobs-box">
            <div className="title-job-box">
              <img className="jobs-ic" src={compsup} alt="compsup" />
              <p className="title-jobs">{jobData[5].title}</p>
            </div>
            <div className="desc-job-box">
              <p className="description">
                {jobData[5].description}
                <br />
                <br />
                <span style={{ color: "#000000", fontWeight: "bold" }}>
                  Tugas & Tanggung Jawab :
                </span>
              </p>
              <div>
                <ul className="description-points">
                  {jobData[5].tasks.map((task, index) => (
                    <li key={index} className="description-point">
                      {task}
                    </li>
                  ))}
                </ul>
              </div>
              <p className="description">
                <span style={{ color: "#000000", fontWeight: "bold" }}>
                  Keterampilan yang dibutuhkan :
                </span>
                <br />
                {jobData[5].skills}
              </p>
              <p className="description">
                <span style={{ color: "#000000", fontWeight: "bold" }}>
                  Mata kuliah yang harus kamu ambil :
                </span>
                <br />
                {jobData[5].matkul}
              </p>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="jobs-box">
            <div className="title-job-box">
              <img className="jobs-ic" src={netcomp} alt="netcomp" />
              <p className="title-jobs">{jobData[9].title}</p>
            </div>
            <div className="desc-job-box">
              <p className="description">
                {jobData[9].description}
                <br />
                <br />
                <span style={{ color: "#000000", fontWeight: "bold" }}>
                  Tugas & Tanggung Jawab :
                </span>
              </p>
              <div>
                <ul className="description-points">
                  {jobData[9].tasks.map((task, index) => (
                    <li key={index} className="description-point">
                      {task}
                    </li>
                  ))}
                </ul>
              </div>
              <p className="description">
                <span style={{ color: "#000000", fontWeight: "bold" }}>
                  Keterampilan yang dibutuhkan :
                </span>
                <br />
                {jobData[9].skills}
              </p>
              <p className="description">
                <span style={{ color: "#000000", fontWeight: "bold" }}>
                  Mata kuliah yang harus kamu ambil :
                </span>
                <br />
                {jobData[9].matkul}
              </p>
            </div>
          </div>
        </Carousel.Item>
      </Carousel>
    </>
  ),
  ESFJ: (
    <>
      <Carousel className="jobCarousel" variant="dark">
        <Carousel.Item>
          <div className="jobs-box">
            <div className="title-job-box">
              <img className="jobs-ic" src={netcomp} alt="netcomp" />
              <p className="title-jobs">{jobData[9].title}</p>
            </div>
            <div className="desc-job-box">
              <p className="description">
                {jobData[9].description}
                <br />
                <br />
                <span style={{ color: "#000000", fontWeight: "bold" }}>
                  Tugas & Tanggung Jawab :
                </span>
              </p>
              <div>
                <ul className="description-points">
                  {jobData[9].tasks.map((task, index) => (
                    <li key={index} className="description-point">
                      {task}
                    </li>
                  ))}
                </ul>
              </div>
              <p className="description">
                <span style={{ color: "#000000", fontWeight: "bold" }}>
                  Keterampilan yang dibutuhkan :
                </span>
                <br />
                {jobData[9].skills}
              </p>
              <p className="description">
                <span style={{ color: "#000000", fontWeight: "bold" }}>
                  Mata kuliah yang harus kamu ambil :
                </span>
                <br />
                {jobData[9].matkul}
              </p>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="jobs-box">
            <div className="title-job-box">
              <img className="jobs-ic" src={compsyst} alt="compsyst" />
              <p className="title-jobs">{jobData[1].title}</p>
            </div>
            <div className="desc-job-box">
              <p className="description">
                {jobData[1].description}
                <br />
                <br />
                <span style={{ color: "#000000", fontWeight: "bold" }}>
                  Tugas & Tanggung Jawab :
                </span>
              </p>
              <div>
                <ul className="description-points">
                  {jobData[1].tasks.map((task, index) => (
                    <li key={index} className="description-point">
                      {task}
                    </li>
                  ))}
                </ul>
              </div>
              <p className="description">
                <span style={{ color: "#000000", fontWeight: "bold" }}>
                  Keterampilan yang dibutuhkan :
                </span>
                <br />
                {jobData[1].skills}
              </p>
              <p className="description">
                <span style={{ color: "#000000", fontWeight: "bold" }}>
                  Mata kuliah yang harus kamu ambil :
                </span>
                <br />
                {jobData[1].matkul}
              </p>
            </div>
          </div>
        </Carousel.Item>
      </Carousel>
    </>
  ),
  ESFP: (
    <>
      <Carousel className="jobCarousel" variant="dark">
        <Carousel.Item>
          <div className="jobs-box">
            <div className="title-job-box">
              <img className="jobs-ic" src={webdev} alt="webdev" />
              <p className="title-jobs">{jobData[0].title}</p>
            </div>
            <div className="desc-job-box">
              <p className="description">
                {jobData[0].description}
                <br />
                <br />
                <span style={{ color: "#000000", fontWeight: "bold" }}>
                  Tugas & Tanggung Jawab :
                </span>
              </p>
              <div>
                <ul className="description-points">
                  {jobData[0].tasks.map((task, index) => (
                    <li key={index} className="description-point">
                      {task}
                    </li>
                  ))}
                </ul>
              </div>
              <p className="description">
                <span style={{ color: "#000000", fontWeight: "bold" }}>
                  Keterampilan yang dibutuhkan :
                </span>
                <br />
                {jobData[0].skills}
              </p>
              <p className="description">
                <span style={{ color: "#000000", fontWeight: "bold" }}>
                  Mata kuliah yang harus kamu ambil :
                </span>
                <br />
                {jobData[0].matkul}
              </p>
            </div>
          </div>
        </Carousel.Item>

        <Carousel.Item>
          <div className="jobs-box">
            <div className="title-job-box">
              <img className="jobs-ic" src={compsup} alt="compsup" />
              <p className="title-jobs">{jobData[5].title}</p>
            </div>
            <div className="desc-job-box">
              <p className="description">
                {jobData[5].description}
                <br />
                <br />
                <span style={{ color: "#000000", fontWeight: "bold" }}>
                  Tugas & Tanggung Jawab :
                </span>
              </p>
              <div>
                <ul className="description-points">
                  {jobData[5].tasks.map((task, index) => (
                    <li key={index} className="description-point">
                      {task}
                    </li>
                  ))}
                </ul>
              </div>
              <p className="description">
                <span style={{ color: "#000000", fontWeight: "bold" }}>
                  Keterampilan yang dibutuhkan :
                </span>
                <br />
                {jobData[5].skills}
              </p>
              <p className="description">
                <span style={{ color: "#000000", fontWeight: "bold" }}>
                  Mata kuliah yang harus kamu ambil :
                </span>
                <br />
                {jobData[5].matkul}
              </p>
            </div>
          </div>
        </Carousel.Item>
      </Carousel>
    </>
  ),
  ENFJ: (
    <>
      <Carousel className="jobCarousel" variant="dark">
        <Carousel.Item>
          <div className="jobs-box">
            <div className="title-job-box">
              <img className="jobs-ic" src={webdev} alt="webdev" />
              <p className="title-jobs">{jobData[0].title}</p>
            </div>
            <div className="desc-job-box">
              <p className="description">
                {jobData[0].description}
                <br />
                <br />
                <span style={{ color: "#000000", fontWeight: "bold" }}>
                  Tugas & Tanggung Jawab :
                </span>
              </p>
              <div>
                <ul className="description-points">
                  {jobData[0].tasks.map((task, index) => (
                    <li key={index} className="description-point">
                      {task}
                    </li>
                  ))}
                </ul>
              </div>
              <p className="description">
                <span style={{ color: "#000000", fontWeight: "bold" }}>
                  Keterampilan yang dibutuhkan :
                </span>
                <br />
                {jobData[0].skills}
              </p>
              <p className="description">
                <span style={{ color: "#000000", fontWeight: "bold" }}>
                  Mata kuliah yang harus kamu ambil :
                </span>
                <br />
                {jobData[0].matkul}
              </p>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="jobs-box">
            <div className="title-job-box">
              <img className="jobs-ic" src={sofdev} alt="sofdev" />
              <p className="title-jobs">{jobData[2].title}</p>
            </div>
            <div className="desc-job-box">
              <p className="description">
                {jobData[2].description}
                <br />
                <br />
                <span style={{ color: "#000000", fontWeight: "bold" }}>
                  Tugas & Tanggung Jawab :
                </span>
              </p>
              <div>
                <ul className="description-points">
                  {jobData[2].tasks.map((task, index) => (
                    <li key={index} className="description-point">
                      {task}
                    </li>
                  ))}
                </ul>
              </div>
              <p className="description">
                <span style={{ color: "#000000", fontWeight: "bold" }}>
                  Keterampilan yang dibutuhkan :
                </span>
                <br />
                {jobData[2].skills}
              </p>
              <p className="description">
                <span style={{ color: "#000000", fontWeight: "bold" }}>
                  Mata kuliah yang harus kamu ambil :
                </span>
                <br />
                {jobData[2].matkul}
              </p>
            </div>
          </div>
        </Carousel.Item>
      </Carousel>
    </>
  ),
  ENFP: (
    <>
      <Carousel className="jobCarousel" variant="dark">
        <Carousel.Item>
          <div className="jobs-box">
            <div className="title-job-box">
              <img className="jobs-ic" src={webdev} alt="webdev" />
              <p className="title-jobs">{jobData[0].title}</p>
            </div>
            <div className="desc-job-box">
              <p className="description">
                {jobData[0].description}
                <br />
                <br />
                <span style={{ color: "#000000", fontWeight: "bold" }}>
                  Tugas & Tanggung Jawab :
                </span>
              </p>
              <div>
                <ul className="description-points">
                  {jobData[0].tasks.map((task, index) => (
                    <li key={index} className="description-point">
                      {task}
                    </li>
                  ))}
                </ul>
              </div>
              <p className="description">
                <span style={{ color: "#000000", fontWeight: "bold" }}>
                  Keterampilan yang dibutuhkan :
                </span>
                <br />
                {jobData[0].skills}
              </p>
              <p className="description">
                <span style={{ color: "#000000", fontWeight: "bold" }}>
                  Mata kuliah yang harus kamu ambil :
                </span>
                <br />
                {jobData[0].matkul}
              </p>
            </div>
          </div>
        </Carousel.Item>
      </Carousel>
    </>
  ),
  ENTJ: (
    <>
      <Carousel className="jobCarousel" variant="dark">
        <Carousel.Item>
          <div className="jobs-box">
            <div className="title-job-box">
              <img className="jobs-ic" src={webdev} alt="webdev" />
              <p className="title-jobs">{jobData[0].title}</p>
            </div>
            <div className="desc-job-box">
              <p className="description">
                {jobData[0].description}
                <br />
                <br />
                <span style={{ color: "#000000", fontWeight: "bold" }}>
                  Tugas & Tanggung Jawab :
                </span>
              </p>
              <div>
                <ul className="description-points">
                  {jobData[0].tasks.map((task, index) => (
                    <li key={index} className="description-point">
                      {task}
                    </li>
                  ))}
                </ul>
              </div>
              <p className="description">
                <span style={{ color: "#000000", fontWeight: "bold" }}>
                  Keterampilan yang dibutuhkan :
                </span>
                <br />
                {jobData[0].skills}
              </p>
              <p className="description">
                <span style={{ color: "#000000", fontWeight: "bold" }}>
                  Mata kuliah yang harus kamu ambil :
                </span>
                <br />
                {jobData[0].matkul}
              </p>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="jobs-box">
            <div className="title-job-box">
              <img className="jobs-ic" src={sofdev} alt="sofdev" />
              <p className="title-jobs">{jobData[2].title}</p>
            </div>
            <div className="desc-job-box">
              <p className="description">
                {jobData[2].description}
                <br />
                <br />
                <span style={{ color: "#000000", fontWeight: "bold" }}>
                  Tugas & Tanggung Jawab :
                </span>
              </p>
              <div>
                <ul className="description-points">
                  {jobData[2].tasks.map((task, index) => (
                    <li key={index} className="description-point">
                      {task}
                    </li>
                  ))}
                </ul>
              </div>
              <p className="description">
                <span style={{ color: "#000000", fontWeight: "bold" }}>
                  Keterampilan yang dibutuhkan :
                </span>
                <br />
                {jobData[2].skills}
              </p>
              <p className="description">
                <span style={{ color: "#000000", fontWeight: "bold" }}>
                  Mata kuliah yang harus kamu ambil :
                </span>
                <br />
                {jobData[2].matkul}
              </p>
            </div>
          </div>
        </Carousel.Item>
      </Carousel>
    </>
  ),
  ENTP: (
    <>
      <Carousel className="jobCarousel" variant="dark">
        <Carousel.Item>
          <div className="jobs-box">
            <div className="title-job-box">
              <img className="jobs-ic" src={compsyst} alt="compsyst" />
              <p className="title-jobs">{jobData[1].title}</p>
            </div>
            <div className="desc-job-box">
              <p className="description">
                {jobData[1].description}
                <br />
                <br />
                <span style={{ color: "#000000", fontWeight: "bold" }}>
                  Tugas & Tanggung Jawab :
                </span>
              </p>
              <div>
                <ul className="description-points">
                  {jobData[1].tasks.map((task, index) => (
                    <li key={index} className="description-point">
                      {task}
                    </li>
                  ))}
                </ul>
              </div>
              <p className="description">
                <span style={{ color: "#000000", fontWeight: "bold" }}>
                  Keterampilan yang dibutuhkan :
                </span>
                <br />
                {jobData[1].skills}
              </p>
              <p className="description">
                <span style={{ color: "#000000", fontWeight: "bold" }}>
                  Mata kuliah yang harus kamu ambil :
                </span>
                <br />
                {jobData[1].matkul}
              </p>
            </div>
          </div>
        </Carousel.Item>
      </Carousel>
    </>
  ),
};

export default JobsDesc;
