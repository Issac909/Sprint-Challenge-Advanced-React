import { useEffect } from "react";

import { useLocalStorage } from "./localStorage";

export const useDarkMode = (key, initialValue) => {
 const [ darkModeOff, darkModeOn ] = useLocalStorage(key, initialValue);

 const toggleDarkMode = e => {
     e.prevent.default()

     return darkModeOff ? darkModeOn(false) : darkModeOn(true);
 };

 useEffect(() => {
     if(darkModeOff === true) {
         document.body.classList.add('dark-mode');
     }
     else {
         document.body.classList.remove('dark-mode');
     }
 }, [darkModeOff]);

 return [ darkModeOff, darkModeOn, toggleDarkMode ]
}

export default useDarkMode;