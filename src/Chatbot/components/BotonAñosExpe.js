import React from 'react'

export default function BotonAñosExpe(props) {

  const añosExpeMenos2 = () => {
    props.actions.añosExpeMenos2();
  };

  return (
    <div>
      <button className="start-btn" onClick={() => añosExpeMenos2()}>
        Menos de dos años
      </button>
      <button className="start-btn">Mas de dos años</button>
    </div>
  );
}