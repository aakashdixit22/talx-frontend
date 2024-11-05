import { createContext, useEffect, useRef, useState } from "react";

export const ContextApp = createContext();

const AppContext = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);
    
  return (
    <ContextApp.Provider
      value={{
        isOpen,
        setIsOpen
        
      }}
    >
      {children}
    </ContextApp.Provider>
  );
};

export default AppContext;
