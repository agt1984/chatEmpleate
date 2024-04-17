import { createChatBotMessage } from "react-chatbot-kit";
import BotonInicio from "./botonInicio.jsx";
import DogPicture from './DogPicture.jsx';

//aqui va toda la accion
const config = {
  botName: "Learning Bot",
  initialMessages: [
    createChatBotMessage(`Hola, este es tu consejero virtual`, {
      widget: "botonInicio",
    }),
  ],

  widgets: [
    {
      widgetName: "dogPicture",
      widgetFunc: (props) => <DogPicture {...props} />,
    },

    {
      widgetName: "botonInicio",
      widgetFunc: (props) => <BotonInicio {...props} />,
    },
  ],
};




export default config;
