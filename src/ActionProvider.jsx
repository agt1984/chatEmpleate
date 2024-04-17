/*
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

    const handleDog = () => {
     const botMessage = createChatBotMessage(
       "Here's a nice dog picture for you!",
       { widget: "dogPicture" }
     );
     setState((prev) => ({
       ...prev,
       messages: [...prev.messages, botMessage],
     }));
    };

  }

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          actions: {
            handleHello, //la primera accion del bot
            mensajeDespues,
            handleDog,
          },
        });
      })}
    </div>
  );

};

export default ActionProvider;
*/
import React from "react";

class ActionProvider extends React.Component {
  // Define constructor para inicializar el componente
  constructor(props) {
    super(props);
    this.state = {}; // Puedes inicializar el estado aquí si es necesario
  }


  // Define método para manejar la acción 'Hello'
  handleHello = () => {
    const { createChatBotMessage, setState } = this.props;
    const botMessage = createChatBotMessage(
      'Hello. Nice to meet you. Escribe "posterior" para gatillar la segunda respuesta'
    );
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };


  // Define método para manejar la acción 'mensajeDespues'
  mensajeDespues = () => {
    const { createChatBotMessage, setState } = this.props;
    const botMessage = createChatBotMessage("Este es una prueba posterior", {
      widget: "botonInicio",
    });
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };


  // Define método para manejar la acción 'handleDog'
  handleDog = () => {
    const { createChatBotMessage, setState } = this.props;
    const botMessage = createChatBotMessage(
      "Here's a nice dog picture for you!",
      { widget: "dogPicture" }
    );
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  render() {
    const { children } = this.props;

    return (
      <div>
        {React.Children.map(children, (child) => {
          return React.cloneElement(child, {
            actions: {
              handleHello: this.handleHello,
              mensajeDespues: this.mensajeDespues,
              handleDog: this.handleDog,
            },
          });
        })}
      </div>
    );
  }
}

export default ActionProvider;