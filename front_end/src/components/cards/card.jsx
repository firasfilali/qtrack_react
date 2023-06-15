import React from "react";
import up from "../../assets/up.png";
import down from "../../assets/down.png";
import "../../assets/css/card.css";

const Card = (props) => {
  return (
    <div {...props}>
      <div className="card  mx-auto mb-5">
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>

          <p className="card-text mt-4">Référence</p>
          <p>{props.reference}</p>
          <div className="row mt-4">
            <div className="col" style={{ textAlign: "center" }}>
              <p className="up">+{props.conforme}%</p>
              <img src={up} className="responsive-img" />
            </div>
            <div className="col" style={{ textAlign: "center" }}>
              <p className="down">-{props.nonconforme}%</p>
              <img src={down} className="responsive-img"  />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
