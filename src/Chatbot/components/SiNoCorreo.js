import React, { useState } from "react";

export default function SiNoCorreo(props) {
  const [botonClickeado, setBotonClickeado] = useState(false);

  const handleClick = (action) => {
    if (!botonClickeado) {
      // Ejecutar la acción asociada al botón
      action();
      // Desactivar todos los botones
      setBotonClickeado(true);
    }
  };

  const correoSi = () => {
    props.actions.correoSi();
  };

  const correoNo = () => {
    props.actions.correoNo();
  };

  const getButtonClassName = () => {
    return botonClickeado ? "start-btn disabled" : "start-btn";
  };

  return (
    <div>
      <button
        className={getButtonClassName()}
        onClick={() => handleClick(correoSi)}
        disabled={botonClickeado}
      >
        SI
      </button>
      <button
        className={getButtonClassName()}
        onClick={() => handleClick(correoNo)}
        disabled={botonClickeado}
      >
        NO
      </button>
    </div>
  );
}
