import React from "react";
import Modal from "react-bootstrap/Modal";

const JobModal = ({ show, onHide, title, description, tasks, skills }) => {
  return (
    <Modal show={show} onHide={onHide} size="lg">
      <Modal.Header closeButton>
        <Modal.Title
          className="job-title"
          id="example-custom-modal-styling-title"
        >
          {title}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p className="description">
          {description} <br />
          <br />
          <span style={{ color: "#000000", fontWeight: "bold" }}>
            Tugas & Tanggung Jawab :
          </span>
        </p>
        <div>
          <ul className="description-points">
            {tasks.map((task, index) => (
              <li className="description-point" key={index}>
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
          {skills}
        </p>
      </Modal.Body>
    </Modal>
  );
};

export default JobModal;
