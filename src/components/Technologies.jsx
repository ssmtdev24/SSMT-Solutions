import React, { useState } from "react";
import "../styles/Technologies.css";

function Technologies() {
  const [expanded, setExpanded] = useState(false);
  const technologies = [
    "ReactJS",
    "PostgreSQL",
    "Python",
    "Java",
    "JavaScript",
    "AWS",
  ];

  return (
    <section id="technologies">
      <h2 className="technologies-heading">
        Technologies we are magnificent at
      </h2>
      <div className={`grid-container ${expanded ? "expanded" : ""}`}>
        {technologies.map((tech, index) => (
          <div key={index} className="grid-item">
            <p>{tech}</p>
            <img
              className="tech-images"
              src={`./images/${tech}_logo.png`}
              alt=""
            />
          </div>
        ))}
      </div>
      <button className="tech-button" onClick={() => setExpanded(!expanded)}>
        {expanded ? "View Less" : "View More"}
      </button>
    </section>
  );
}

export default Technologies;
