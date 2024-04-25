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
    updateChatState(
      "    Directorio de Portales de Empleo para Buscar Prácticas y Primeras Experiencias Profesionales: ",
      "https://www.empleatecontalento.es/portales-empleo-jovenes-sin-experiencia-practicas-primer-empleo/",
      "    Directorio de Ferias de Empleo: ",
      "https://www.empleatecontalento.es/ferias-y-eventos-empleo/",
      "    Directorio de Becas de Trabajo: ",
      "https://www.empleatecontalento.es/becas-trabajo-ofertas-practicas-curriculares-extracurriculares-academicas/",
      "    Directorio de Ofertas de Empleo y Prácticas en Multinacionales: ",
      "https://www.empleatecontalento.es/ofertas-trabajo-empleo-sectores-actividad/",
      "    Directorio de Portales de Empleo para Buscar Trabajo: ",
      "https://www.empleatecontalento.es/mejores-webs-portales-empleo-para-buscar-trabajo/"
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
      "    Directorio de Consultoras de Selección y Head-hunters: ",
      "https://www.empleatecontalento.es/consultoras-seleccion-recursos-humanos-headhunters-cazatalentos-etts-buscar-trabajo-empleo/",
      "    Directorio de Portales de Empleo para Buscar Trabajo: ",
      "https://www.empleatecontalento.es/mejores-webs-portales-empleo-para-buscar-trabajo/",
      "    Directorio de Ofertas de Empleo en Multinacionales: ",
      "https://www.empleatecontalento.es/ofertas-trabajo-empleo-sectores-actividad/"
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
      "¿Cuál es tu situación actual? Puedes elegir una o varias de las opciones siguientes; éstas te redirigirán a distintos portales donde se te proporcionará información sobre cursos gratuitos acordes a tu situación de personal.",
      {
        widget: "SituacionActual",
      }
    );
    updateChatState(
      "    Directorio de Cursos Gratuitos para Desempleados: ",
      "https://www.empleatecontalento.es/cursos-gratuitos-desempleados/",
      "    Directorio de Cursos Gratuitos para Trabajadores y Autónomos: ",
      "https://www.empleatecontalento.es/cursos-gratuitos-trabajadores-autonomos/",
      "    Directorio de Cursos Gratuitos para Emprendedores: ",
      "https://www.empleatecontalento.es/cursos-gratuitos-emprendedores/",
      "    Directorio de Cursos Gratuitos para Menores de 35 años: ",
      "https://www.empleatecontalento.es/cursos-gratuitos-jovenes-garantia-juvenil/"
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
    updateChatState(
      "    Directorio de Recursos para Aprender Inglés Gratis: ",
      "https://www.empleatecontalento.es/aprender-ingles-gratis/",
      "    Directorio de Bootcamps y Másteres: ",
      "https://www.empleatecontalento.es/mejores-bootcamps-tecnologicos/",
      "    Directorio de Becas y Ayudas al Estudio: ",
      "https://www.empleatecontalento.es/becas-ayudas-estudio-estudiar/"
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
    updateChatState(
      "    Servicios de Orientación Académica: ",
      "https://www.empleatecontalento.es/orientacion-coaching-profesional-para-buscar-empleo/"
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
    updateChatState(
      "    Directorio de Portales de Empleo para Buscar Proyectos o Clientes: ",
      "https://www.empleatecontalento.es/portales-empleo-freelance/",
      "    Directorios de Cursos Gratuitos, Libros, etc., para Emprender: ",
      "https://www.empleatecontalento.es/cursos-gratuitos-emprendedores/",
      "https://www.empleatecontalento.es/mejores-libros-para-emprendedores/",
      "    Directorios de Recursos Económicos para Emprender: Ayudas, Financiación, Concursos, etc.: ",
      "https://www.empleatecontalento.es/ayudas-para-emprendedores/",
      "https://www.empleatecontalento.es/ayudas-para-contratar/",
      "https://www.empleatecontalento.es/concursos-premios-emprendedores-emprendimiento/",
      "    Directorio de Lanzaderas para Emprender: ",
      "https://www.empleatecontalento.es/lanzadera-aceleradora-incubadora-empresa-startup/",
      "    Directorio de Espacios de Trabajo Gratuitos: ",
      "https://www.empleatecontalento.es/coworking-gratuitos-madrid/",
      "    Guía gratuita de Marketing para Emprendedores: ",
      "https://www.empleatecontalento.es/marketing-para-emprendedores/"
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
    updateChatState(
      "Guía para Elaborar un Buen Currículum: ",
      "https://www.empleatecontalento.es/como-elaborar-buen-curriculum/",
      "Guía para Elaborar una Buena Carta de Presentación: ",
      "https://www.empleatecontalento.es/como-redactar-carta-presentacion/",
      "Guía de Cómo Usar LinkedIn para Buscar Empleo: ",
      "https://www.empleatecontalento.es/buscar-trabajo-linkedin/",
      "Guía de Cómo Superar con Éxito una Entrevista de Trabajo: ",
      "https://www.empleatecontalento.es/entrevista-trabajo/"
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
    updateChatState(
      "Servicios de Orientación Profesional: ",
      "https://www.empleatecontalento.es/orientacion-coaching-profesional-para-buscar-empleo/"
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
      "Espero haberte ayudado ;) . Te animo a seguirnos en nuestras RRSS para estar al día en nuestros contenidos, aqui te presento varias opciones que te enviarán a los portales de nuestras redes sociales",
      {
        widget: "Redes",
      }
    );
    updateState(message);
  };

  const SiNoCorreo = () => {
    const message = createChatBotMessage(
      "Por último, ¿Quieres que te enviemos estos contenidos a tu email?",
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
      `El correo ha sido enviado exitosamente, hasta luego.`
    );
    updateState(message);
  };

  const Final2 = () => {
    const message = createChatBotMessage(
      `Espero haber sido de ayuda. Hasta luego.`
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
            Final2,
          },
        });
      })}
    </div>
  );
};

export default ActionProvider;
