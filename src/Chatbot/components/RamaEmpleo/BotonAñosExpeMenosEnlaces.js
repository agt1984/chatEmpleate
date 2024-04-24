
import React, { useState, useEffect } from "react";

export default function BotonAñosExpe(props) {
  const [despedidaEjecutada, setDespedidaEjecutada] = useState(false);

  useEffect(() => {
    if (!despedidaEjecutada) {
      // Establecer un temporizador para ejecutar las funciones después de 1000 milisegundos (1 segundo) al montar el componente
      const timeoutId = setTimeout(() => {
        props.actions.DeseasMasAyuda(); 
        setDespedidaEjecutada(true); 
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
            "https://www.empleatecontalento.es/portales-empleo-jovenes-sin-experiencia-practicas-primer-empleo/"
          )
        }
        className={getButtonClassName()}
      >
        Portales de Empleo para Buscar Prácticas y Primeras Experiencias
        Profesionales
      </button>

      <button
        onClick={() =>
          handleButtonClick(
            "https://www.empleatecontalento.es/ferias-y-eventos-empleo/"
          )
        }
        className={getButtonClassName()}
      >
        Directorio de Ferias de Empleo
      </button>

      <button
        onClick={() =>
          handleButtonClick(
            "https://www.empleatecontalento.es/becas-trabajo-ofertas-practicas-curriculares-extracurriculares-academicas/"
          )
        }
        className={getButtonClassName()}
      >
        Directorio de Becas de Trabajo
      </button>

      <button
        onClick={() =>
          handleButtonClick(
            "https://www.empleatecontalento.es/mejores-webs-portales-empleo-para-buscar-trabajo/"
          )
        }
        className={getButtonClassName()}
      >
        Directorio de Ofertas de Empleo y Prácticas en Multinacionales
      </button>

      <button
        onClick={() =>
          handleButtonClick(
            "https://www.empleatecontalento.es/mejores-webs-portales-empleo-para-buscar-trabajo/"
          )
        }
        className={getButtonClassName()}
      >
        Directorio de Portales de Empleo para Buscar Trabajo
      </button>
    </div>
  );
}
