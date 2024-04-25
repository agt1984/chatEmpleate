import Chatbot from "react-chatbot-kit";
import "react-chatbot-kit/build/main.css";
import config from "./Chatbot/config";
import ActionProvider from "./Chatbot/ActionProvider";
import MessageParser from "./Chatbot/MessageParser";
import { ChatStateProvider } from "./Chatbot/ChatStateProvider";
import "./App.css";
import { useState } from "react";

function App() {
  const [chatState, setChatState] = useState({ messages: [], HTMLString: "" });

  //setChatState(this.messages, this.HTMLString);

  return (
    <ChatStateProvider value={{ chatState, setChatState }}>
      <div className="App">
        <Chatbot
          headerText="Orientador Virtual de Empléate con Talento"
          config={config}
          messageParser={MessageParser}
          actionProvider={ActionProvider}
        />
      </div>
    </ChatStateProvider>
  );
}

export default App;
