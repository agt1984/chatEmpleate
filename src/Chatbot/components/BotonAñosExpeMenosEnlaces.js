/*
import React, { useState } from "react";

export default function BotonAñosExpe(props) {
  const [botonClickeado, setBotonClickeado] = useState(false);

  const handleClick = (action) => {
    if (!botonClickeado) {
      // Ejecutar la acción asociada al botón
      action();
      // Desactivar todos los botones
      setBotonClickeado(true);
    }
  };

  const añosExpeMenos2 = () => {
    props.actions.añosExpeMenos2();
  };

  const añosExpeMas2 = () => {
    props.actions.añosExpeMas2();
  };

  const getButtonClassName = () => {
    return botonClickeado ? "start-btn disabled" : "start-btn";
  };

  return (
    <div>
      <a
        href="https://www.empleatecontalento.es/portales-empleo-jovenes-sin-experiencia-practicas-primer-empleo/"
        onClick={() => handleClick(añosExpeMenos2)}
        disabled={botonClickeado}
      >
        <button className={getButtonClassName()}>
          Portales de Empleo para Buscar Prácticas y Primeras Experiencias
          Profesionales
        </button>
      </a>

      <a
        href="https://www.empleatecontalento.es/ferias-y-eventos-empleo/"
        onClick={() => handleClick(añosExpeMas2)}
        disabled={botonClickeado}
      >
        <button className={getButtonClassName()}>
          Directorio de Ferias de Empleo
        </button>
      </a>

      <a
        href="https://www.empleatecontalento.es/becas-trabajo-ofertas-practicas-curriculares-extracurriculares-academicas/"
        onClick={() => handleClick(añosExpeMas2)}
        disabled={botonClickeado}
      >
        <button className={getButtonClassName()}>
          Directorio de Becas de Trabajo
        </button>
      </a>

      <a
        href="https://www.empleatecontalento.es/ofertas-trabajo-empleo-sectores-actividad/"
        onClick={() => handleClick(añosExpeMas2)}
        disabled={botonClickeado}
      >
        <button className={getButtonClassName()}>
          Directorio de Ofertas de Empleo y Prácticas en Multinacionales
        </button>
      </a>

      <a
        href="https://www.empleatecontalento.es/mejores-webs-portales-empleo-para-buscar-trabajo/"
        onClick={() => handleClick(añosExpeMas2)}
        disabled={botonClickeado}
      >
        <button className={getButtonClassName()}>
          Directorio de Portales de Empleo para Buscar Trabajo
        </button>
      </a>
    </div>
  );
}

*/
import React, { useState } from "react";

export default function BotonAñosExpe(props) {
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

  const Despedida = () => {
    props.actions.Despedida();
  };

  const getButtonClassName = () => {
    return botonClickeado ? "start-btn disabled" : "start-btn";
  };

  return (
    <div>
      <a
        href="https://www.empleatecontalento.es/portales-empleo-jovenes-sin-experiencia-practicas-primer-empleo/"
        onClick={(e) => {
          e.preventDefault(); // Prevenir la navegación por defecto del enlace
          handleClick(Despedida, e.currentTarget.href);
        }}
        className="button-link"
        disabled={botonClickeado}
      >
        <button className={getButtonClassName()}>
          Portales de Empleo para Buscar Prácticas y Primeras Experiencias
          Profesionales
        </button>
      </a>

      <a
        href="https://www.empleatecontalento.es/ferias-y-eventos-empleo/"
        onClick={(e) => {
          e.preventDefault();
          handleClick(Despedida, e.currentTarget.href);
        }}
        className="button-link"
        disabled={botonClickeado}
      >
        <button className={getButtonClassName()}>
          Directorio de Ferias de Empleo
        </button>
      </a>

      <a
        href="https://www.empleatecontalento.es/becas-trabajo-ofertas-practicas-curriculares-extracurriculares-academicas/"
        onClick={(e) => {
          e.preventDefault();
          handleClick(Despedida, e.currentTarget.href);
        }}
        className="button-link"
        disabled={botonClickeado}
      >
        <button className={getButtonClassName()}>
          Directorio de Becas de Trabajo
        </button>
      </a>

      <a
        href="https://www.empleatecontalento.es/ofertas-trabajo-empleo-sectores-actividad/"
        onClick={(e) => {
          e.preventDefault();
          handleClick(Despedida, e.currentTarget.href);
        }}
        className="button-link"
        disabled={botonClickeado}
      >
        <button className={getButtonClassName()}>
          Directorio de Ofertas de Empleo y Prácticas en Multinacionales
        </button>
      </a>

      <a
        href="https://www.empleatecontalento.es/mejores-webs-portales-empleo-para-buscar-trabajo/"
        onClick={(e) => {
          e.preventDefault();
          handleClick(Despedida, e.currentTarget.href);
        }}
        className="button-link"
        disabled={botonClickeado}
      >
        <button className={getButtonClassName()}>
          Directorio de Portales de Empleo para Buscar Trabajo
        </button>
      </a>
    </div>
  );
}
