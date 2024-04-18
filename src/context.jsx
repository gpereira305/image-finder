import { createContext, useContext, useEffect, useState } from "react";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
   const [theme, setTheme] = useState(false);

   function handleToggleTheme() {
      const newTheme = !theme;
      setTheme(newTheme);
   }

   const contextValues = { theme, handleToggleTheme };

   return (
      <AppContext.Provider value={contextValues}>
         {children}
      </AppContext.Provider>
   );
};

export const useGlobalContext = () => useContext(AppContext);
