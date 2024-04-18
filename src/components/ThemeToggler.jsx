import React from "react";
import { BsFillMoonFill, BsFillSunFill } from "react-icons/bs";
import { useGlobalContext } from "../context";

export default function ThemeToggler() {
   const { theme, handleToggleTheme } = useGlobalContext();
   return (
      <div className="toggle-container">
         <span className="theme-toggler" onClick={handleToggleTheme}>
            {theme ? (
               <BsFillSunFill className="toggle-icon" />
            ) : (
               <BsFillMoonFill className="toggle-icon" />
            )}
         </span>
      </div>
   );
}
