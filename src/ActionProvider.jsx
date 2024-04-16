import React from "react";

const ActionProvider = ({ createChatBotMessage, setState, children }) => {
  
  //forma en la que construyes la funcion respuesta
  const handleHello = () => {
    const botMessage = createChatBotMessage('Hello. Nice to meet you.');
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage]
    }));
  };
  
  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          actions: {
            handleHello, //la primera accion del bot
          },
        });
      })}
    </div>
  );

};

export default ActionProvider;
