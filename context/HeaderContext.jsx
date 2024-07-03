import { createContext, useState } from "react";

const HeaderContext = createContext();

export const HeaderProvider = ({ children }) => {
  const [screen, setScreen] = useState("home");

  return (
    <HeaderContext.Provider value={{ screen, setScreen }}>
      {children}
    </HeaderContext.Provider>
  );
};

export default HeaderContext;
