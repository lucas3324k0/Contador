import React, { useState, createContext, useContext } from 'react';

const ContadorContexto = React.createContext(null);

const ContadorProvider = ({ children }) => {
    const [event, setEvent] = useState(null);
    
    return (
        <ContadorContexto.Provider value={{ event, setEvent }}>
            {children}
        </ContadorContexto.Provider>
    );
};

export { ContadorContexto, ContadorProvider };
