import React from "react";
import { Outlet, useParams } from "react-router-dom";

export default function City({ cities }) {
  const { id } = useParams();
  let city = cities.filter((c) => c.id === parseInt(id));

  // const {temp, weather, wind, clouds, latitud, longitud}
  return (
    <div className="ciudad">
      <div className="container">
        <h2>{city[0].name}</h2>
        <div className="info">
          <div>Temperatura: {city[0].temp} ºC</div>
          <div>Clima: {city[0].weather}</div>
          <div>Viento: {city[0].wind} km/h</div>
          <div>Cantidad de nubes: {city[0].clouds}</div>
          <div>Latitud: {city[0].latitud}º</div>
          <div>Longitud: {city[0].longitud}º</div>
        </div>
      </div>
      <Outlet />
    </div>
  );
}
