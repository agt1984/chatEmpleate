import React, { useState, useEffect } from "react";
import { createChatBotMessage } from "react-chatbot-kit";
import emailjs from "@emailjs/browser";
import { useChatState } from "./ChatStateProvider";

const MessageParser = ({ children, actions }) => {
  const { chatState } = useChatState();
  const [chatHistory, setChatHistory] = useState("");

  useEffect(() => {
    const updatedChatHistory = chatState.messages
      .map((message) => `${message}`)
      .join("\n");
    setChatHistory(updatedChatHistory);
    console.log(updatedChatHistory);
    console.log(chatState.messages);
  }, [chatState]);

  const parse = (message) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(message)) {
      createChatBotMessage("Por favor, introduce un email válido.");
      console.log("Email no valido");
    } else {
      console.log("Email valido");

      const serviceID = "service_rhmcrld";
      const templateID = "template_s8k0j7q";
      const publicKey = "TVETq8hbmSmqu94a6";

      const templateParams = {
        to_email: message,
        message: chatHistory,
        isHtml: true,
      };
      emailjs.send(serviceID, templateID, templateParams, publicKey).then(
        () => {
          console.log("Enviado");

          actions.Final1();
        },
        (err) => {
          alert(JSON.stringify(err));
        }
      );
    }
  };

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          parse: parse,
          actions,
        });
      })}
    </div>
  );
};

export default MessageParser;
