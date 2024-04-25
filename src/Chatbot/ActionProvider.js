import React from "react";
import { useChatState } from "./ChatStateProvider";

const ActionProvider = ({ createChatBotMessage, setState, children }) => {
  const { updateChatState } = useChatState();

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
      "A continuación, te facilito los contenidos que mejor se ajustan a tus necesidades. Puedes seleccionar uno de los botones que te enviará directamente al portal que necesites.",
      {
        widget: "BotonAñosExpeMenosEnlaces",
      }
    );
    updateState(message);
  };

  const añosExpeMas2 = () => {
    const message = createChatBotMessage(
      "A continuación, te facilito los contenidos que mejor se ajustan a tus necesidades. Puedes seleccionar uno de los botones que te enviará directamente al portal que necesites.",
      {
        widget: "BotonAñosExpeMasEnlaces",
      }
    );
    updateChatState(
      "https://www.empleatecontalento.es/consultoras-seleccion-recursos-humanos-headhunters-cazatalentos-etts-buscar-trabajo-empleo/",
      "https://www.empleatecontalento.es/consultoras-seleccion-recursos-humanos-headhunters-cazatalentos-etts-buscar-trabajo-empleo/",
      "https://www.empleatecontalento.es/mejores-webs-portales-empleo-para-buscar-trabajo/"
    );
    updateState(message);
  };

  //FUNCIONES QUE SERAN USADAS EN TODAS LAS RAMAS
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
      "¿Quieres que te enviemos estos contenidos a tu email?",
      {
        widget: "SiNoCorreo",
      }
    );
    updateState(message);
  };

  const SendEmail = () => {
    const message = createChatBotMessage(
      `Por favor, manda tu correo a través del recuadro de texto. El email se mandará automáticamente, no guardamos tus datos.`
    );
    updateState(message);
  };

  const Final1 = () => {
    const message = createChatBotMessage(
      `Te hemos mandado el correo. Hasta aquí el chat`
    );
    updateState(message);
  };

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

            ramaFormacion,
            ramaEmprendimiento,

            Redes,
            SiNoCorreo,
            SendEmail,
            Final1,
          },
        });
      })}
    </div>
  );
};

export default ActionProvider;
