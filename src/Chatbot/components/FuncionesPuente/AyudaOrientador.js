import React from "react";

export default function AyudaOrientador(props) {
  const handleClick = (url) => {
    // Abrir la URL en una nueva pestaña al hacer clic en el botón
    window.open(url, "_blank");
  };

  return (
    <div>
      <a
        href="https://www.whatsapp.com/channel/0029Va9lm9x2v1InvYQD9N20"
        onClick={(e) => {
          e.preventDefault();
          handleClick(e.currentTarget.href);
        }}
        className="button-link"
      >
        <button className="start-btn">Si</button>
      </a>

      <a
        href="https://t.me/empleatecontalento"
        onClick={(e) => {
          e.preventDefault();
          handleClick(e.currentTarget.href);
        }}
        className="button-link"
      >
        <button className="start-btn">No</button>
      </a>
    </div>
  );
}
