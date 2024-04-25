import React, { createContext, useContext, useState, useEffect } from "react";

// Crear el contexto
const ChatStateContext = createContext();

// Crear un proveedor de contexto
export const ChatStateProvider = ({ children }) => {
  const [chatState, setChatState] = useState({ messages: [] });

  //funcion actualizar estado chat
  const updateChatState = (...newMessages) => {
    setChatState((prevState) => ({
      ...prevState,
      messages: [...prevState.messages, ...newMessages],
    }));
  };

  //Comprobacion de chatState
  useEffect(() => {
    console.log(chatState);
  }, [chatState]);

  return (
    <ChatStateContext.Provider
      value={{ chatState, setChatState, updateChatState }}
    >
      {children}
    </ChatStateContext.Provider>
  );
};

// Crear un hook personalizado para acceder al estado del chat
export const useChatState = () => useContext(ChatStateContext);
