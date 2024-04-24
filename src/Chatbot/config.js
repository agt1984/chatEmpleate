import { createChatBotMessage } from 'react-chatbot-kit';
import Avatar from './components/Avatar';
import BotonInicio from './components/BotonInicio';
import BotonAñosExpe from './components/PrimerRama/BotonAñosExpe';
import BotonAñosExpeMenosEnlaces from './components/PrimerRama/BotonAñosExpeMenosEnlaces';
import BotonAñosExpeMasEnlaces from "./components/PrimerRama/BotonAñosExpeMas";
import Redes from "./components/Redes";
import SiNoCorreo from './components/SiNoCorreo';
import AspectoMejorar from './components/FuncionesPuente/AspectoMejorar';
import AyudaOrientador from './components/FuncionesPuente/AyudaOrientador';
import DeseasMasAyuda from './components/FuncionesPuente/DeseasMasAyuda';

const startbotn = document.querySelectorAll(".start-btn");

startbotn.forEach((boton) => {
  boton.addEventListener("click", function () {
    this.classList.add("active"); // Añadir clase "active" al elemento cliqueado
  });
});

const config = {
  botName: "Consejero Virtual",
  initialMessages: [
    createChatBotMessage(
      `Hola, bienvenid@a Empléate con Talento. Soy tu orientador virtual y puedo ayudarte a encontrar los mejores contenidos en función de tus necesidades, solo tienes que escojer las siguientes opciones.`,
      {
        widget: "BotonInicio",
      }
    ),
  ],

  customComponents: {
    botAvatar: (props) => <Avatar {...props} />,
  },


  //atento a agregar las siguientes opciones
  widgets: [
    {
      widgetName: "BotonInicio",
      widgetFunc: (props) => <BotonInicio {...props} />,
    },
    {
      widgetName: "BotonAñosExpe",
      widgetFunc: (props) => <BotonAñosExpe {...props} />,
    },
    {
      widgetName: "BotonAñosExpeMenosEnlaces",
      widgetFunc: (props) => <BotonAñosExpeMenosEnlaces {...props} />,
    },
    {
      widgetName: "BotonAñosExpeMasEnlaces",
      widgetFunc: (props) => <BotonAñosExpeMasEnlaces {...props} />,
    },

    //funcion puente, conector entre eventos
    {
      widgetName: "DeseasMasAyuda",
      widgetFunc: (props) => <DeseasMasAyuda {...props} />,
    },


    //ayuda orientador
    {
      widgetName: "AyudaOrientador",
      widgetFunc: (props) => <AyudaOrientador {...props} />,
    },


    //widgets lo que se mejora
    {
      widgetName: "AspectoMejorar",
      widgetFunc: (props) => <AspectoMejorar {...props} />,
    },


    //widgets generales
    {
      widgetName: "Redes",
      widgetFunc: (props) => <Redes {...props} />,
    },
    {
      widgetName: "SiNoCorreo",
      widgetFunc: (props) => <SiNoCorreo {...props} />,
    },
  ],
};

export default config;