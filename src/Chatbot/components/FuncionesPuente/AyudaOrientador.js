import React, { useState } from "react";

export default function AyudaOrientador(props) {
  const [botonClickeado, setBotonClickeado] = useState(false);

  const handleClick = (action) => {
    if (!botonClickeado) {
      // Ejecutar la acción asociada al botón
      action();
      // Desactivar todos los botones
      setBotonClickeado(true);
    }
  };

  const ayudaSi = () => {
    props.actions.ayudaSi();
  };

  const ayudaNo = () => {
    props.actions.ayudaNo();
  };

  const getButtonClassName = () => {
    return botonClickeado ? "start-btn disabled" : "start-btn";
  };

  return (
    <div>
      <button
        className={getButtonClassName()}
        onClick={() => handleClick(ayudaSi)}
        disabled={botonClickeado}
      >
        SI
      </button>
      <button
        className={getButtonClassName()}
        onClick={() => handleClick(ayudaNo)}
        disabled={botonClickeado}
      >
        NO
      </button>
    </div>
  );
}
