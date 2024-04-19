import React from 'react';

const ActionProvider = ({ createChatBotMessage, setState, children }) => {

  //rama años de EXPERIENCIA
    const añosExpe = () => {
      const message = createChatBotMessage(
        "¿Cuántos años de experiencia profesional tienes?",
        {
          widget: "BotonAñosExpe",
        }
      );
      updateState(message);
    };

    const añosExpeMenos2 = () => {
      const message = createChatBotMessage(
        "Aqui te prporciono los siguientes enlaces: \nDirectorio de Portales de \nEmpleo para Buscar Prácticas y Primeras Experiencias Profesionales: \nhttps://www.empleatecontalento.es/", "Aqui te prporciono los siguientes enlaces: \nDirectorio de Portales de \nEmpleo para Buscar Prácticas y Primeras Experiencias Profesionales: \nhttps://www.empleatecontalento.es/",
        {
          widget: "BotonAñosExpe",
        }
      );
      updateState(message);
    };



    //segunda rama FORMACION
    const ramaFormacion = () => {
      const message = createChatBotMessage(
        "¿Cuál es tu situación actual? Puedes marcar más de una opción"
      );
      updateState(message);
    };




    //tercera rama EMPRENDIMIENTO
    const ramaEmprendimiento = () => {
      const message = createChatBotMessage(
        "¿En cuáles de estos aspectos necesitas ayuda como emprendedor/a? Puedes marcar más de una opción"
      );
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
                    añosExpeMenos2,
                    ramaFormacion,
                    ramaEmprendimiento,
                  },
                });
            })}
        </div>
    );
};

export default ActionProvider;