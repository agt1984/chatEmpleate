/*
import React, { useState } from "react";

export default function BotonInicio(props) {

    //años experiencia
    const añosExpe = () => {
        props.actions.añosExpe();
    }

    //formacion
    const ramaFormacion = () => {
      props.actions.ramaFormacion();
    };

    //emprendimiento
    const ramaEmprendimiento = () => {
      props.actions.ramaEmprendimiento();
    };

    return (
      <div>
        <button className="start-btn" onClick={() => añosExpe()}>
          ¿Estas buscando empleo?
        </button>
        <button className="start-btn" onClick={() => ramaFormacion()}>
          ¿Estas buscando formación?
        </button>
        <button className="start-btn" onClick={() => ramaEmprendimiento()}>
          ¿Quieres emprender?
        </button>
      </div>
    );
}
*/
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
    props.actions.ramaFormacion();
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
