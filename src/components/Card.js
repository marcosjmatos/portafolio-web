import React from "react";
import "../styles/Card.css";

const Card = ({ img, title, link }) => {
  return (
    <div className="card border-0 justify-content-between">
      <a href={link} target={"_blank"} className="link text-decoration-none">
        <img className="card-img-top" src={img} alt={title} />
        <div className="card-body user-select-none bg-secondary text-white fw-semibold text-center">
          <div>
            <span className="fw-bolder text-secondary text-decoration-none">
              {"<  "}
            </span>
            {title}
            <span className="fw-bolder text-secondary text-decoration-none">
              {"  />"}
            </span>
          </div>
        </div>
      </a>
    </div>
  );
};
export default Card;
