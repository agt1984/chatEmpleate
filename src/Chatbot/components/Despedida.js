/*
import React, { useState } from "react";

export default function Despedida(props) {
  const [botonClickeado, setBotonClickeado] = useState(false);

  const handleClick = (action, url) => {
    if (!botonClickeado) {
      // Ejecutar la acción asociada al botón
      action();
      // Desactivar todos los botones
      setBotonClickeado(true);
      // Abrir la URL en una nueva pestaña al hacer clic en el botón
      window.open(url, "_blank");
    }
  };

  const getButtonClassName = () => {
    return botonClickeado ? "end-btn disabled" : "end-btn";
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
        disabled={botonClickeado}
      >
        <button className={getButtonClassName()}>WhatsApp</button>
      </a>

      <a
        href="https://t.me/empleatecontalento"
        onClick={(e) => {
          e.preventDefault();
          handleClick(e.currentTarget.href);
        }}
        className="button-link"
        disabled={botonClickeado}
      >
        <button className={getButtonClassName()}>Telegram</button>
      </a>

      <a
        href="https://www.linkedin.com/company/empleatecontalento/"
        onClick={(e) => {
          e.preventDefault();
          handleClick(e.currentTarget.href);
        }}
        className="button-link"
        disabled={botonClickeado}
      >
        <button className={getButtonClassName()}>LinkedIn</button>
      </a>

      <a
        href="https://www.instagram.com/empleatecontalento/"
        onClick={(e) => {
          e.preventDefault();
          handleClick(e.currentTarget.href);
        }}
        className="button-link"
        disabled={botonClickeado}
      >
        <button className={getButtonClassName()}>Instagram</button>
      </a>

      <a
        href="https://www.tiktok.com/@empleatecontalento"
        onClick={(e) => {
          e.preventDefault();
          handleClick(e.currentTarget.href);
        }}
        className="button-link"
        disabled={botonClickeado}
      >
        <button className={getButtonClassName()}>TikTok</button>
      </a>
    </div>
  );
}
*/
import React, { useState } from "react";

export default function Despedida(props) {
  const [botonClickeado, setBotonClickeado] = useState(false);

  const handleClick = (url) => {
    if (!botonClickeado) {
      // Desactivar todos los botones
      setBotonClickeado(true);
      // Abrir la URL en una nueva pestaña al hacer clic en el botón
      window.open(url, "_blank");
    }
  };

  const getButtonClassName = () => {
    return botonClickeado ? "end-btn disabled" : "end-btn";
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
        disabled={botonClickeado}
      >
        <button className={getButtonClassName()}>WhatsApp</button>
      </a>

      <a
        href="https://t.me/empleatecontalento"
        onClick={(e) => {
          e.preventDefault();
          handleClick(e.currentTarget.href);
        }}
        className="button-link"
        disabled={botonClickeado}
      >
        <button className={getButtonClassName()}>Telegram</button>
      </a>

      <a
        href="https://www.linkedin.com/company/empleatecontalento/"
        onClick={(e) => {
          e.preventDefault();
          handleClick(e.currentTarget.href);
        }}
        className="button-link"
        disabled={botonClickeado}
      >
        <button className={getButtonClassName()}>LinkedIn</button>
      </a>

      <a
        href="https://www.instagram.com/empleatecontalento/"
        onClick={(e) => {
          e.preventDefault();
          handleClick(e.currentTarget.href);
        }}
        className="button-link"
        disabled={botonClickeado}
      >
        <button className={getButtonClassName()}>Instagram</button>
      </a>

      <a
        href="https://www.tiktok.com/@empleatecontalento"
        onClick={(e) => {
          e.preventDefault();
          handleClick(e.currentTarget.href);
        }}
        className="button-link"
        disabled={botonClickeado}
      >
        <button className={getButtonClassName()}>TikTok</button>
      </a>
    </div>
  );
}

