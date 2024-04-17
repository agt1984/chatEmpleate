import React from 'react'

export default function BotonInicio(props) {

    //años experiencia
    const añosExpe = () => {
        props.actions.añosExpe();
    }

    //
    const initialAction2 = () => {
      props.actions.initialAction2();
    };

    return (
      <div>
        <button className="start-btn" onClick={() => añosExpe()}>
          ¿Estas buscando empleo?
        </button>
        <button className="start-btn" onClick={() => initialAction2()}>
          ¿Estas buscando formación?
        </button>
        <button className="start-btn">¿Quieres emprender?</button>
      </div>
    );
}
