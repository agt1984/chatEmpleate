import React from "react";

const ActionProvider = ({ createChatBotMessage, setState, children }) => {
  
  //forma en la que construyes la funcion respuesta
  const handleHello = () => {
    const botMessage = createChatBotMessage('Hello. Nice to meet you. Escribe "posterior", para gatillar la segunda respuesta');
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage]
    }));
  };

  const mensajeDespues = () => {
    const botMessage = createChatBotMessage("Este es una pureba posterior");
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  }

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          actions: {
            handleHello, //la primera accion del bot
            mensajeDespues,
          },
        });
      })}
    </div>
  );

};

export default ActionProvider;
