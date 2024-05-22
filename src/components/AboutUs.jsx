import React from "react";
import "../styles/AboutUs.css";

const AboutUs = () => {
  return (
    <div id="about-us-container">
      <div className="about-us-text">
        <h2>About Us</h2>
        <hr className="underline" />
        <p>
          <strong>S SMT Solutions</strong>, an award winning White Label Digital
          Marketing and IT Staff Augmentation Services Agency is a team of
          experienced professionals helping businesses and Google Partner
          Agencies achieve their goals by providing comprehensive range of
          High-Quality Digital Marketing Services and On-Demand Technology
          Resources. We have successfully delivered more than 12000 projects
          till date and today, our team comprises of more than 300+
          professionals. We are headquartered in India and have client presence
          in the United States, Canada, Australia, and the United Kingdom. Our
          SEO, Paid Search and Paid Social Services are designed to help
          agencies to build online presence of their clients, Reach their target
          audience effectively and Boost their revenue in no time. We provide a
          range of services, including search engine optimization, pay-per-click
          advertising, social media marketing, programmatic Ads, buying media,
          ecommerce website promotion, and much more. Programmatic Ads has now
          become our forte.
        </p>
      </div>
      <div className="about-us-image">
        <img
          className="img-logo"
          src="./images/about_us.jpg"
          alt="Company Logo"
        />
      </div>
    </div>
  );
};

export default AboutUs;
