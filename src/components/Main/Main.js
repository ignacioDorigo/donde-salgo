import React from "react";
import "./Main.css";

export default function Main() {
  return (
    <div className="main__bg">
      <h1 className="main__titulo">¿Dónde Salgo?</h1>

      {/*  */}
      <div className="div__buscar">
        <label className="lupa" htmlFor="buscar">
          <svg
            className="lupa__svg"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#b1b0b5"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          >
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
        </label>
        <input
          className="input__buscar"
          id="buscar"
          placeholder="Buscar por ubicación ó intereses"
        />
      </div>

      {/* - */}

      <button className="btn_buscar">Buscar</button>
    </div>
  );
}
