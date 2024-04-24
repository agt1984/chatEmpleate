import React, { useState, useEffect } from "react";

export default function MasFormacion(props) {
  const [despedidaEjecutada, setDespedidaEjecutada] = useState(false);

  useEffect(() => {
    if (!despedidaEjecutada) {
      // Establecer un temporizador para ejecutar las funciones después de 1000 milisegundos (1 segundo) al montar el componente
      const timeoutId = setTimeout(() => {
        props.actions.OrientadorFormacion(); // Ejecutar Despedida solo una vez
        setDespedidaEjecutada(true); // Marcar que Despedida se ha ejecutado
      }, 1600);

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
            "https://www.empleatecontalento.es/aprender-ingles-gratis/"
          )
        }
        className={getButtonClassName()}
      >
        Aprender Inglés
      </button>

      <button
        onClick={() =>
          handleButtonClick(
            "https://www.empleatecontalento.es/mejores-bootcamps-tecnologicos/"
          )
        }
        className={getButtonClassName()}
      >
        Estudiar un Master o Bootcamp
      </button>

      <button
        onClick={() =>
          handleButtonClick(
            "https://www.empleatecontalento.es/becas-ayudas-estudio-estudiar/"
          )
        }
        className={getButtonClassName()}
      >
        Becas y Ayudas al Estudio
      </button>
    </div>
  );
}
