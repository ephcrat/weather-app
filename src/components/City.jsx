import React from "react";
import { Outlet, useParams } from "react-router-dom";
import styles from "../styles/City.module.css";

export default function City({ cities }) {
  const { id } = useParams();
  let city = cities.filter((c) => c.id === parseInt(id));

  // const {temp, weather, wind, clouds, latitud, longitud}
  return (
    <div className={styles.ciudad}>
      <div className={styles.container}>
        <h2>{city[0]?.name}</h2>
        <div className={styles.info}>
          <div>
            Temperatura: <span>{city[0]?.temp} ºC</span>
          </div>
          <div>
            Clima: <span>{city[0]?.weather}</span>
          </div>
          <div>
            Viento: <span>{city[0]?.wind} km/h</span>
          </div>
          <div>
            Cantidad de nubes: <span>{city[0]?.clouds}</span>
          </div>
          <div>
            Latitud: <span>{city[0]?.latitud}º</span>
          </div>
          <div>
            Longitud: <span>{city[0]?.longitud}º</span>
          </div>
        </div>
      </div>
      <Outlet />
    </div>
  );
}
