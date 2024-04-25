import React, { useState, useEffect } from "react";

export default function EnlacesEmprendimiento(props) {
  const [despedidaEjecutada, setDespedidaEjecutada] = useState(false);

  useEffect(() => {
    if (!despedidaEjecutada) {
      // Establecer un temporizador para ejecutar las funciones después de 1000 milisegundos (1 segundo) al montar el componente
      const timeoutId = setTimeout(() => {
        props.actions.Redes();
        props.actions.SiNoCorreo();
        setDespedidaEjecutada(true); // Marcar que Despedida se ha ejecutado
      }, 6000);

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
            "https://www.empleatecontalento.es/portales-empleo-freelance/"
          )
        }
        className={getButtonClassName()}
      >
        En buscar proyectos o clientes
      </button>

      <button
        onClick={() =>
          handleButtonClick(
            "https://www.empleatecontalento.es/cursos-gratuitos-emprendedores/"
          )
        }
        className={getButtonClassName()}
      >
        En formarme para emprender
      </button>

      <button
        onClick={() =>
          handleButtonClick(
            "https://www.empleatecontalento.es/ayudas-para-emprendedores/"
          )
        }
        className={getButtonClassName()}
      >
        En conseguir financiación para emprender
      </button>

      <button
        onClick={() =>
          handleButtonClick(
            "https://www.empleatecontalento.es/lanzadera-aceleradora-incubadora-empresa-startup/"
          )
        }
        className={getButtonClassName()}
      >
        En encontrar lanzaderas para mi startup
      </button>

      <button
        onClick={() =>
          handleButtonClick(
            "https://www.empleatecontalento.es/coworking-gratuitos-madrid/"
          )
        }
        className={getButtonClassName()}
      >
        En conseguir un espacios de trabajo gratuitos
      </button>

      <button
        onClick={() =>
          handleButtonClick(
            "https://www.empleatecontalento.es/marketing-para-emprendedores/"
          )
        }
        className={getButtonClassName()}
      >
        En marketing: web, redes sociales,etc.
      </button>
    </div>
  );
}
