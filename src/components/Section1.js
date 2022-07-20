import React from "react";
import "../styles/Section1.css";

const Section1 = ({ main_text, secondary_text }) => {
  return (
    <section id="welcome" className={`sec1 container-fluid vh-100 py-5`}>
      <h1 className="display-1 text-white fw-semibold text-center user-select-none pt-5">
        {main_text}
      </h1>
      <div className="container">
        <p className="display-6 text-white text-center fst-italic user-select-none">
          {secondary_text}
        </p>
      </div>
    </section>
  );
};
export default Section1;
