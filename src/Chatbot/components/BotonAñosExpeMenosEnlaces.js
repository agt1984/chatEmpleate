import React, { useState } from "react";

export default function BotonAñosExpe(props) {
  const [despedidaEjecutada, setDespedidaEjecutada] = useState(false);

  const handleClick = (action, url) => {
    if (!despedidaEjecutada) {
      props.actions.Redes(); // Ejecutar Despedida solo una vez
      props.actions.SiNoCorreo();
      setDespedidaEjecutada(true); // Marcar que Despedida se ha ejecutado
    }
    action(); // Ejecutar la acción asociada al botón
    window.open(url, "_blank"); // Abrir la URL en una nueva pestaña al hacer clic en el botón
  };

  const getButtonClassName = () => {
    return despedidaEjecutada ? "start-btn disabled" : "start-btn";
  };

  return (
    <div>
      <button
        onClick={() =>
          handleClick(() => {},
          "https://www.empleatecontalento.es/portales-empleo-jovenes-sin-experiencia-practicas-primer-empleo/")
        }
        className={getButtonClassName()}
      >
        Portales de Empleo para Buscar Prácticas y Primeras Experiencias
        Profesionales
      </button>

      <button
        onClick={() =>
          handleClick(() => {},
          "https://www.empleatecontalento.es/ferias-y-eventos-empleo/")
        }
        className={getButtonClassName()}
      >
        Directorio de Ferias de Empleo
      </button>

      <button
        onClick={() =>
          handleClick(() => {},
          "https://www.empleatecontalento.es/becas-trabajo-ofertas-practicas-curriculares-extracurriculares-academicas/")
        }
        className={getButtonClassName()}
      >
        Directorio de Becas de Trabajo
      </button>

      <button
        onClick={() =>
          handleClick(() => {},
          "https://www.empleatecontalento.es/ofertas-trabajo-empleo-sectores-actividad/")
        }
        className={getButtonClassName()}
      >
        Directorio de Ofertas de Empleo y Prácticas en Multinacionales
      </button>

      <button
        onClick={() =>
          handleClick(() => {},
          "https://www.empleatecontalento.es/mejores-webs-portales-empleo-para-buscar-trabajo/")
        }
        className={getButtonClassName()}
      >
        Directorio de Portales de Empleo para Buscar Trabajo
      </button>
    </div>
  );
}
