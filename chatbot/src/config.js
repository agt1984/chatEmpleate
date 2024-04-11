// Config starter code
//aqui se pueden cambiar las caracteristicas esteticas
import React from "react";
import { createChatBotMessage } from "react-chatbot-kit";

import BotAvatar from "./components/BotAvatar/BotAvatar";

const config = {
  initialMessages: [createChatBotMessage(`Hello world`)],
  botName: "EmpleaBot",
  customComponents:{
    botAvatar: (props) => <BotAvatar {...props} />
  }
}

export default config;
