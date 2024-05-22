import React from "react";
import "../styles/SuccessStories.css";

function SuccessStories() {
  return (
    <section id="success-stories">
      <h2 className="success-heading">Our Success Stories</h2>
      <div className="story-container">
        <div className="story-box">
          <h3>Client X Transformation</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className="story-box">
          <h3>Project Y Milestone</h3>
          <p>Integer scelerisque mauris id fermentum consequat.</p>
        </div>
      </div>
    </section>
  );
}

export default SuccessStories;
