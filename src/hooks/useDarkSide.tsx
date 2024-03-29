import { useEffect } from "react";
import { useApp } from "../states/AppState";
  
export default function useDarkSide() {
    const { theme, setTheme } = useApp();

    const colorTheme = theme === "dark" ? "light" : "dark";
    
    useEffect(() => {
        const root = window.document.documentElement;
        root.classList.remove(colorTheme);
        root.classList.add(theme);
        localStorage.setItem('theme', theme);
    }, [theme, colorTheme]);
  
    return [colorTheme, setTheme]
}