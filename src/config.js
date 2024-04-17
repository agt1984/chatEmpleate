import { createChatBotMessage } from "react-chatbot-kit";
import BotonInicio from "./BotonInicio.jsx";
import DogPicture from './DogPicture.jsx';

//aqui va toda la accion
const config = {
  botName: "Learning Bot",
  initialMessages: [
    createChatBotMessage(
      `Hola, bienvenid@ a Empléate con Talento. Soy tu orientador virtual y puedo ayudarte a encontrar los mejores contenidos en función de tus necesidades, solo tienes que contestar a estas preguntas:`,
      {
        widget: "botonInicio",
      }
    ),
  ],

  //la forma de crear los widgets es sencilla, solo repite el medoto y cambia el nombre
  widgets: [
    {
      widgetName: "dogPicture",
      widgetFunc: (props) => <DogPicture {...props} />,
    },

    {
      widgetName: "botonInicio",
      widgetFunc: (props) => <BotonInicio {...props} />,
    },

    {
      widgetName: "botonInicio",
      widgetFunc: (props) => <BotonInicio {...props} />,
    },
  ],
};




export default config;
