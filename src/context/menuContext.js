import { createContext, useState } from "react";

export const MenuContext = createContext();

export const MenuProvider = ({ children }) => {
  const [modal, setModal] = useState(false);

  function ToogleModal() {
    setModal(!modal);
  }
  

  return (
    <MenuContext.Provider value={{ modal,ToogleModal }}>
      {children}
    </MenuContext.Provider>
  );
};
