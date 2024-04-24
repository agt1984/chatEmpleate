import React from 'react';

const ActionProvider = ({ createChatBotMessage, setState, children }) => {
  //--
  //rama años de EXPERIENCIA
  //--
  const añosExpe = () => {
    const message = createChatBotMessage(
      "¿Cuántos años de experiencia profesional tienes?",
      {
        widget: "BotonAñosExpe",
      }
    );
    updateState(message);
  };

  const añosExpeMenos2 = () => {
    const message = createChatBotMessage(
      "Te facilito los contenidos que mejor se ajustan a tus necesidades. Puedes seleccionar uno o varios de los botones que te llevarán directamente al portal que necesites. No te preocupes si eres redireccionado a otra página; estaré esperándote con más opciones.",
      {
        widget: "BotonAñosExpeMenosEnlaces",
      }
    );
    updateState(message);
  };

  const añosExpeMas2 = () => {
    const message = createChatBotMessage(
      "Te facilito los contenidos que mejor se ajustan a tus necesidades. Puedes seleccionar uno o varios de los botones que te llevarán directamente al portal que necesites. No te preocupes si eres redireccionado a otra página; estaré esperándote con más opciones.",
      {
        widget: "BotonAñosExpeMasEnlaces",
      }
    );
    updateState(message);
  };



  //FUNCIONES PUENTE
  //----------------------------------------
  //----------------------------------------
  const AspectoMejorar = () => {
    const message = createChatBotMessage(
      "¿En cuáles de estos aspectos necesitas mejorar en tu búsqueda de empleo? Aqui te presento varias opciones en donde puedes investigar libremente",
      {
        widget: "AspectoMejorar",
      }
    );
    updateState(message);
  };
  const AyudaOrientador = () => {
    const message = createChatBotMessage(
      "¿Necesitas ayuda de un orientador profesional?",
      {
        widget: "AyudaOrientador",
      }
    );
    updateState(message);
  };
  const DeseasMasAyuda = () => {
    const message = createChatBotMessage(
      "¿Deseas más ayuda en como mejorar en tu búsqueda de empleo?",
      {
        widget: "DeseasMasAyuda",
      }
    );
    updateState(message);
  };
  //----------------------------------------
  //----------------------------------------


  //FUNCIONES QUE SERAN USADAS EN TODAS LAS RAMAS redes y correo
  //----------------------------------------
  //----------------------------------------
  const Redes = () => {
    const message = createChatBotMessage(
      "Espero haberte ayudado ;) . Por último, te animo a seguirnos en nuestras RRSS para estar al día en nuestros contenidos",
      {
        widget: "Redes",
      }
    );
    updateState(message);
  };

  const SiNoCorreo = () => {
    const message = createChatBotMessage(
      "Por ultimo, ¿Quieres que te enviemos estos contenidos a tu email?",
      {
        widget: "SiNoCorreo",
      }
    );
    updateState(message);
  };
  //----------------------------------------
  //----------------------------------------


  //--
  //segunda rama FORMACION
  //--
  const ramaFormacion = () => {
    const message = createChatBotMessage(
      "¿Cuál es tu situación actual? Puedes marcar más de una opción"
    );
    updateState(message);
  };

  //--
  //tercera rama EMPRENDIMIENTO
  //--
  const ramaEmprendimiento = () => {
    const message = createChatBotMessage(
      "¿En cuáles de estos aspectos necesitas ayuda como emprendedor/a? Puedes marcar más de una opción"
    );
    updateState(message);
  };

  const updateState = (message, checker) => {
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, message],
      checker,
    }));
  };

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          actions: {
            añosExpe,
            añosExpeMenos2,
            añosExpeMas2,
            AspectoMejorar,
            AyudaOrientador,
            DeseasMasAyuda,

            ramaFormacion,
            ramaEmprendimiento,

            Redes,
            SiNoCorreo,
          },
        });
      })}
    </div>
  );
};

export default ActionProvider;