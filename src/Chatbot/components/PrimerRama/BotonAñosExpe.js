
import React, { useState } from "react";

export default function BotonAñosExpe(props) {
  const [botonClickeado, setBotonClickeado] = useState(false);

  const handleClick = (...actions) => {
    if (!botonClickeado) {
      // Ejecutar todas las funciones asociadas al botón
      actions.forEach((action) => action());
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
      <button
        className={getButtonClassName()}
        onClick={() => handleClick(añosExpeMenos2)}
        disabled={botonClickeado}
      >
        Menos de dos años
      </button>
      <button
        className={getButtonClassName()}
        onClick={() => handleClick(añosExpeMas2)}
        disabled={botonClickeado}
      >
        Más de dos años
      </button>
    </div>
  );
}
