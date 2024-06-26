import React, { useState } from "react";

export default function BotonInicio(props) {
  
  const [botonClickeado, setBotonClickeado] = useState(false);

  const handleClick = (action) => {
    if (!botonClickeado) {
      // Ejecutar la acción asociada al botón
      action();
      // Desactivar todos los botones
      setBotonClickeado(true);
    }
  };

  const añosExpe = () => {
    props.actions.añosExpe();
  };

  const ramaFormacion = () => {
    props.actions.SituacionActual();
  };

  const ramaEmprendimiento = () => {
    props.actions.ramaEmprendimiento();
  };

  const getButtonClassName = () => {
    return botonClickeado ? "start-btn disabled" : "start-btn";
  };

  return (
    <div>
      <button
        className={getButtonClassName()}
        onClick={() => handleClick(añosExpe)}
        disabled={botonClickeado}
      >
        ¿Estás buscando empleo?
      </button>
      <button
        className={getButtonClassName()}
        onClick={() => handleClick(ramaFormacion)}
        disabled={botonClickeado}
      >
        ¿Estás buscando formación?
      </button>
      <button
        className={getButtonClassName()}
        onClick={() => handleClick(ramaEmprendimiento)}
        disabled={botonClickeado}
      >
        ¿Quieres emprender?
      </button>
    </div>
  );
}
