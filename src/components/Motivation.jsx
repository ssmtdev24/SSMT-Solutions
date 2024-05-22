import React from "react";
import "../styles/Motivation.css";

function Motivation() {
  return (
    <section id="motivation">
      <h3 className="motivation-heading">
        It is the NUMBER that keeps us motivated
      </h3>
      <div className="number-boxes">
        <div className="number-box">
          <h3 className="number">350+ </h3>

          <p className="text">Resources</p>
        </div>
        <div className="number-box">
          <h3 className="number">450+</h3>

          <p className="text">Projects</p>
        </div>
        <div className="number-box">
          <h3 className="number">150+</h3>

          <p className="text">Clients</p>
        </div>
      </div>
    </section>
  );
}

export default Motivation;
