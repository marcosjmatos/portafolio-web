import React from "react";
import '../styles/Footer.css'

const Footer = () => {
  return (
    <footer className="footer user-select-none bg-dark text-center text-lg-start border-top border-danger">
      <div className="text-center text-white p-3">
        {"© 2022 Copyright: "} 
        <a className="text-white text-decoration-none" href="https://github.com/marcosjmatos" target={"_blank"}>
           {" pepedev.com"}
        </a>
      </div>
    </footer>
  );
};

export default Footer
