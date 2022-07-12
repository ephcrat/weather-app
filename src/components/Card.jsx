import React from "react";
import CardTemp from "./CardTemp";
import PropTypes from "prop-types";
import cardstyle from "../styles/Card.module.css";
import { Link } from "react-router-dom";

function Card({ max, min, name, img, id, onClose }) {
  // acá va tu código
  function handleOnClose() {
    if (typeof onClose === "function") onClose();
  }
  return (
    <div className={cardstyle.div}>
      <Link style={{ textDecoration: "none" }} to={`/city/${id}`}>
        <div>
          <button className={cardstyle.btn} onClick={handleOnClose}>
            X
          </button>
        </div>

        <span className={cardstyle.name}>{name}</span>

        <img
          src={`http://openweathermap.org/img/wn/${img}@2x.png`}
          alt="weather"
        />
        <div className={cardstyle.temps}>
          <CardTemp className={cardstyle.tempMin} label="Min" value={min} />
          <CardTemp className={cardstyle.tempMax} label="Max" value={max} />
        </div>
      </Link>
    </div>
  );
}

Card.propTypes = {
  max: PropTypes.number,
  min: PropTypes.number,
  name: PropTypes.string,
  img: PropTypes.string,
  onClose: PropTypes.func,
};

export default Card;
