import { createContext, useState } from "react";

export const MenuContext = createContext();

export const MenuProvider = ({ children }) => {
  const [menuBar, setMenuBar] = useState(false);
  const [param, setParam] = useState(null);

  function ToogleMenu() {
    setMenuBar(!menuBar);
  }
  function changeParams(param) {
    setParam(param);
  }

  return (
    <MenuContext.Provider value={{ menuBar, param, ToogleMenu, changeParams }}>
      {children}
    </MenuContext.Provider>
  );
};
