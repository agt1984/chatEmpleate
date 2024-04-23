import { createChatBotMessage } from 'react-chatbot-kit';
import Avatar from './components/Avatar';
import BotonInicio from './components/BotonInicio';
import BotonAñosExpe from './components/BotonAñosExpe';
import BotonAñosExpeMenosEnlaces from './components/BotonAñosExpeMenosEnlaces';
import BotonAñosExpeMasEnlaces from "./components/BotonAñosExpeMas";
import Redes from "./components/Redes";
import SiNoCorreo from './components/SiNoCorreo';

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