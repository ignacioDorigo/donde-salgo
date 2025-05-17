import React from "react";
import "./Main.css";

export default function Main() {
  return (
    <div className="main__bg">
      <h1 className="main__titulo">Descubrí la noche de Buenos Aires</h1>

      <div className="div__buscar">
        <input
          className="input__buscar"
          id="buscar"
          placeholder="Buscar eventos o lugares"
        />
        <button className="btn_buscar">Buscar</button>
      </div>
    </div>
  );
}
