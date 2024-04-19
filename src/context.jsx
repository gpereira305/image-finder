import { createContext, useContext, useEffect, useState } from "react";

const AppContext = createContext();

function handleGetInitialDarkMode() {
   const prefersDarkMode = window.matchMedia(
      "(prefers-color-scheme: dark)",
   ).matches;
   const storedDarkMode = localStorage.getItem("darkTheme");

   if (storedDarkMode === null) return prefersDarkMode;

   return storedDarkMode === "true";
}

export const AppProvider = ({ children }) => {
   const [theme, setTheme] = useState(handleGetInitialDarkMode());
   const [searchTerm, setSearchTerm] = useState("gorilla");

   console.log(searchTerm);
   function handleToggleTheme() {
      const newTheme = !theme;
      setTheme(newTheme);
   }

   useEffect(() => {
      document.querySelector("body").classList.toggle("dark-theme", theme);
   }, [theme]);

   const contextValues = {
      theme,
      handleToggleTheme,
      searchTerm,
      setSearchTerm,
   };

   return (
      <AppContext.Provider value={contextValues}>
         {children}
      </AppContext.Provider>
   );
};

export const useGlobalContext = () => useContext(AppContext);
