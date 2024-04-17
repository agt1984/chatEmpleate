import React from 'react';

const ActionProvider = ({ createChatBotMessage, setState, children }) => {

    const añosExpe = () => {
      const message = createChatBotMessage(
        "¿Cuántos años de experiencia profesional tienes?",
        {
          widget: "BotonAñosExpe",
        }
      );
      updateState(message);
    };







    const initialAction2 = () => {
      const message = createChatBotMessage("segundo evento posterior");
      updateState(message);
    };

    const updateState = (message, checker) => {
        setState((prev) => ({
            ...prev,
            messages: [...prev.messages, message],
            checker,
        }))
    }

    return (
        <div>
            {React.Children.map(children, (child) => {
                return React.cloneElement(child, {
                  actions: {
                    añosExpe,
                    initialAction2,
                  },
                });
            })}
        </div>
    );
};

export default ActionProvider;