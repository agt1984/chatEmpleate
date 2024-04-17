//este fichero maneja el imput del usuario al chatbot

import React from "react";

const MessageParser = ({ children, actions }) => {
  
  const parse = (message) => {
    
    if (message.includes('hello')) {//aqui se define el imput que llama a la funcion que hace que el chatbot responda
      actions.handleHello();
    }
    
    if (message.includes('posterior')) {//aqui se define el imput que llama a la funcion que hace que el chatbot responda
      actions.mensajeDespues();
    }

    if (message.includes("dog")) {//widget
      actions.handleDog();
    }
    
  };

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          parse: parse,
          actions: {},
        });
      })}
    </div>
  );
};

export default MessageParser;
