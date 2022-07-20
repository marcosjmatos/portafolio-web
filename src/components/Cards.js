import React from "react";
import Card from "./Card";
import '../styles/Cards.css'
import shop_img from "../assets/Shop.png";
import calc_img from "../assets/Calculator.png";


const Cards = ({ main_text }) => {
  return (
    <section id="projects" className={`sec2 container-fluid min-vh-100`}>
      <h1 className="h2 text-white fw-semibold text-center text-decoration-underline pt-5 pb-5 user-select-none">
        {main_text}
      </h1>
      <div className="container-fluid justify-content-around">
        <div className="row">
          <div className="col-md-4">
            <Card img={shop_img} title="Matos Shop" link="https://marcosjmatos.github.io/bsale-client/"/>
            <br/>
          </div>
          <div className="col-md-4">
            <Card img={calc_img} title="Calculator" link="https://calculator-ten-livid.vercel.app/" />
            <br/>
          </div>
          <div className="col-md-4">
            <Card />
            <br/>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Cards;
