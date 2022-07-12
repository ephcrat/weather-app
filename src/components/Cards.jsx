import React from "react";
import Card from "./Card";
import cardstyle from "../styles/Cards.module.css";

export default function Cards({ cities, onRemove }) {
  // acá va tu código
  // tip, podés usar un map
  return (
    <div className={cardstyle.div}>
      {cities.map((city) => (
        <Card
          key={city.id}
          max={city.max}
          min={city.min}
          name={city.name}
          img={city.img}
          id={city.id}
          onClose={() => onRemove(city.id)}
        />
      ))}
    </div>
  );
}
