import React from "react";
import {BsLinkedin, BsGithub, BsMailbox2} from 'react-icons/bs'

const Section3 = ({ main_text }) => {
  return (
    <section id="contact" className={`container-fluid vh-50 py-5 bg-secondary justify-content-lg-between`}>
      <h1 className="h2 text-white fw-semibold text-center user-select-none pb-5">
        {main_text}
      </h1>
      <div className="container">
      <div className="row user-select-none pt-5">
        <a href="https://www.linkedin.com/in/marcosjmatos/" target={"_blank"}className="col-md-4 text-white text-decoration-none h4 fadeInDown">
        <BsLinkedin />
          {" Linkedin"}
        </a>
        <a href="https://github.com/marcosjmatos" target={"_blank"}className="col-md-4 text-white text-decoration-none h4 fadeInDown">
        <BsGithub />
          {" Github"}
        </a>
        <a href="mailto:marcosjmatosbrache@gmail.com" target={"_blank"}className="col-md-4 text-white text-decoration-none h4 fadeInDown">
        <BsMailbox2 />
          {" Send a mail"}
        </a>
      </div>
      </div>
    </section>
  );
};
export default Section3;
