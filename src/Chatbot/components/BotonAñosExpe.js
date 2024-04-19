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
        Mas de dos años
      </button>
    </div>
  );
}
