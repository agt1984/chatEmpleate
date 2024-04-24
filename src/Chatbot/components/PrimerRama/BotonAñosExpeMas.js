
import React, { useState, useEffect } from "react";

export default function BotonAñosExpeMas(props) {
  const [despedidaEjecutada, setDespedidaEjecutada] = useState(false);

  useEffect(() => {
    if (!despedidaEjecutada) {
      // Establecer un temporizador para ejecutar las funciones después de 1000 milisegundos (1 segundo) al montar el componente
      const timeoutId = setTimeout(() => {
        props.actions.DeseasMasAyuda(); // Ejecutar Despedida solo una vez
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
            "https://www.empleatecontalento.es/consultoras-seleccion-recursos-humanos-headhunters-cazatalentos-etts-buscar-trabajo-empleo/"
          )
        }
        className={getButtonClassName()}
      >
        Directorio de Consultoras de Selección y Head-hunters
      </button>

      <button
        onClick={() =>
          handleButtonClick(
            "https://www.empleatecontalento.es/consultoras-seleccion-recursos-humanos-headhunters-cazatalentos-etts-buscar-trabajo-empleo/"
          )
        }
        className={getButtonClassName()}
      >
        Directorio de Portales de Empleo para Buscar Trabajo
      </button>

      <button
        onClick={() =>
          handleButtonClick(
            "https://www.empleatecontalento.es/mejores-webs-portales-empleo-para-buscar-trabajo/"
          )
        }
        className={getButtonClassName()}
      >
        Directorio de Ofertas de Empleo en Multinacionales
      </button>
    </div>
  );
}






