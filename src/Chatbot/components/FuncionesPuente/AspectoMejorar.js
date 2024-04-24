/*
import React from "react";

export default function AspectoMejorar(props) {
  
  const handleClick = (url) => {
    // Abrir la URL en una nueva pestaña al hacer clic en el botón
    window.open(url, "_blank");
  };

  return (
    <div>
      <a
        href="https://www.empleatecontalento.es/como-elaborar-buen-curriculum/"
        onClick={(e) => {
          e.preventDefault();
          handleClick(e.currentTarget.href);
        }}
        className="button-link"
      >
        <button className="end-btn">Mi Currículum</button>
      </a>

      <a
        href="https://www.empleatecontalento.es/como-redactar-carta-presentacion/"
        onClick={(e) => {
          e.preventDefault();
          handleClick(e.currentTarget.href);
        }}
        className="button-link"
      >
        <button className="end-btn">Mi Carta de Presentación</button>
      </a>

      <a
        href="https://www.empleatecontalento.es/buscar-trabajo-linkedin/"
        onClick={(e) => {
          e.preventDefault();
          handleClick(e.currentTarget.href);
        }}
        className="button-link"
      >
        <button className="end-btn">En el uso de LinkedIn</button>
      </a>

      <a
        href="https://www.empleatecontalento.es/entrevista-trabajo/"
        onClick={(e) => {
          e.preventDefault();
          handleClick(e.currentTarget.href);
        }}
        className="button-link"
      >
        <button className="end-btn">En las Entrevistas</button>
      </a>
    </div>
  );
}

*/

import React, { useState, useEffect } from "react";

export default function BotonAñosExpeMas(props) {
  const [despedidaEjecutada, setDespedidaEjecutada] = useState(false);

  useEffect(() => {
    if (!despedidaEjecutada) {
      const timeoutId = setTimeout(() => {
        props.actions.AyudaOrientador(); 
        setDespedidaEjecutada(true); // Marcar que Despedida se ha ejecutado
      }, 1600);

      // Limpiar el temporizador al desmontar el componente para evitar ejecuciones adicionales
      return () => clearTimeout(timeoutId);
    }
  }, [despedidaEjecutada, props.actions.AspectoMejorar]);

  const handleClick = (url) => {
    // Abrir la URL en una nueva pestaña
    window.open(url, "_blank");
  };

  const handleButtonClick = (url) => {
    handleClick(url); // Llamar a handleClick para abrir la URL en una nueva pestaña
    // Puedes agregar más lógica aquí si es necesario
  };

  const getButtonClassName = () => {
    return despedidaEjecutada ? "start-btn disabled" : "start-btn";
  };

  return (
    <div>
      <button
        onClick={() =>
          handleButtonClick(
            "https://www.empleatecontalento.es/como-elaborar-buen-curriculum/"
          )
        }
        className={getButtonClassName()}
      >
        Mi Currículum
      </button>

      <button
        onClick={() =>
          handleButtonClick(
            "https://www.empleatecontalento.es/como-redactar-carta-presentacion/"
          )
        }
        className={getButtonClassName()}
      >
        Mi Carta de Presentación
      </button>

      <button
        onClick={() =>
          handleButtonClick(
            "https://www.empleatecontalento.es/buscar-trabajo-linkedin/"
          )
        }
        className={getButtonClassName()}
      >
        En el uso de LinkedIn
      </button>

      <button
        onClick={() =>
          handleButtonClick(
            "https://www.empleatecontalento.es/entrevista-trabajo/"
          )
        }
        className={getButtonClassName()}
      >
        En las Entrevistas
      </button>
    </div>
  );
}






