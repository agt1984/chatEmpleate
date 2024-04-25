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
    updateChatState(
      "https://www.empleatecontalento.es/consultoras-seleccion-recursos-humanos-headhunters-cazatalentos-etts-buscar-trabajo-empleo/",
      "https://www.empleatecontalento.es/consultoras-seleccion-recursos-humanos-headhunters-cazatalentos-etts-buscar-trabajo-empleo/",
      "https://www.empleatecontalento.es/mejores-webs-portales-empleo-para-buscar-trabajo/"
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

  //--
  //segunda rama FORMACION
  //--
  const SituacionActual = () => {
    const message = createChatBotMessage(
      "¿Cuál es tu situación actual? Puedes elegir una o varias de las opciones siguientes; estas te redirigirán a distintos portales donde se te proporcionará información sobre cursos gratuitos acordes a tu situación de personal.",
      {
        widget: "SituacionActual",
      }
    );
    updateState(message);
  };

  const DeseasMasAyudaFormacion = () => {
    const message = createChatBotMessage(
      "Por otro lado, puedo ofrecerte más recursos para tu formación. ¿Te interesa?",
      {
        widget: "DeseasMasAyudaFormacion",
      }
    );
    updateState(message);
  };

  const MasFormacion = () => {
    const message = createChatBotMessage(
      "Aquí te presento más opciones de formación. Puedes explorar los portales que te interesen.",
      {
        widget: "MasFormacion",
      }
    );
    updateState(message);
  };

  const OrientadorFormacion = () => {
    const message = createChatBotMessage(
      "Te gustaria la ayuda de un orientador académico?",
      {
        widget: "AyudaOrientador",
      }
    );
    updateState(message);
  };

  //--
  //tercera rama EMPRENDIMIENTO
  //--
  const ramaEmprendimiento = () => {
    const message = createChatBotMessage(
      "¿En cuáles de estos aspectos necesitas ayuda como emprendedor/a? A continuación, se te presentarán distintos portales donde se te proporcionará información para que puedas iniciar tu proyecto de emprendimiento.",
      {
        widget: "EnlacesEmprendimiento",
      }
    );
    updateState(message);
  };

  //FUNCIONES PUENTE
  //----------------------------------------
  //----------------------------------------
  const AspectoMejorar = () => {
    const message = createChatBotMessage(
      "¿En cuáles de estos aspectos necesitas mejorar en tu búsqueda de empleo? Aqui te presento varias opciones en donde puedes investigar libremente.",
      {
        widget: "AspectoMejorar",
      }
    );
    updateState(message);
  };

  const AyudaOrientador = () => {
    const message = createChatBotMessage(
      "Por otro lado, contamos con el servicio de un orientador profesional. ¿Te gustaría ser redirigido a su portal y solicitar su apoyo?",
      {
        widget: "AyudaOrientador",
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
      "Espero haberte ayudado ;) . Por último, te animo a seguirnos en nuestras RRSS para estar al día en nuestros contenidos, aqui te presento varias opciones que te enviaran a los portales de nuestras redes sociales",
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

  //----------------------------------------------------------------

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
            //empleo
            añosExpe,
            añosExpeMenos2,
            añosExpeMas2,
            DeseasMasAyuda,

            //formacion
            SituacionActual,
            DeseasMasAyudaFormacion,
            MasFormacion,
            OrientadorFormacion,

            //emprendimiento
            ramaEmprendimiento,

            //funciones puente
            AspectoMejorar,
            AyudaOrientador,

            //despedida
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
