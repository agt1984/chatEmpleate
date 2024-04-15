import React from "react";
import Chatbot from "react-chatbot-kit";
import config from "./config.js";
import MessageParser from "./MessageParser.jsx";
import ActionProvider from "./ActionProvider.jsx";

import "react-chatbot-kit/build/main.css";

function App() {
  return (
    <div className="App">
      <Chatbot
        config={config}
        messageParser={MessageParser}
        actionProvider={ActionProvider}
      />
    </div>
  );
}

export default App;
