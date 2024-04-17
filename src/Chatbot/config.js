import { createChatBotMessage } from 'react-chatbot-kit';
import Avatar from './components/Avatar';
import BotonInicio from './components/BotonInicio';
import BotonAñosExpe from './components/BotonAñosExpe';


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
  ],
};

export default config;