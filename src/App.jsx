// App.js

import React from "react";
import Navbar from "./components/Navbar";
import Companies from "./components/Companies";
import Services from "./components/Services";
import Technologies from "./components/Technologies";
import SuccessStories from "./components/SuccessStories";
import Motivation from "./components/Motivation";
import ContactForm from "./components/ContactForm";
import "./App.css";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import AboutUs from "./components/AboutUs";

function App() {
  return (
    <div className="App">
      <header>
        <Navbar />
      </header>
      <Hero />
      <Companies />
      <AboutUs />
      <Services />
      <Technologies />
      <SuccessStories />
      <Motivation />
      <ContactForm />
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
