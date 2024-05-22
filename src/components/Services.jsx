import React, { useState } from "react";
import "../styles/Services.css";

function Services() {
  // State to track the expanded state of each box
  const [expandedBox, setExpandedBox] = useState(null);

  // Function to toggle the expanded state of a box
  const toggleBox = (index) => {
    setExpandedBox(expandedBox === index ? null : index);
  };

  return (
    <section id="services">
      <h2 className="services-heading">Our Services</h2>
      <div className="service-grid">
        {[...Array(4)].map((_, index) => (
          <div
            key={index}
            className={`service-box ${expandedBox === index ? "expanded" : ""}`}

            // onClick={() => toggleBox(index)}
          >
            {/* <p className="service-text">Service {index + 1} Details</p> */}
            <img
              className="service-image"
              src={`./images/service_image_${index + 1}.jpg`}
              alt={`Service ${index + 1}`}
            />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;
