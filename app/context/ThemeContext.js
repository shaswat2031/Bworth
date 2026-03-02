"use client";
import React, { createContext, useState, useContext, useEffect } from "react";

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
    const [theme, setTheme] = useState("blue"); // Default to 'blue'
    useEffect(() => {
        try {
            const savedTheme = localStorage.getItem("appTheme");
            if (savedTheme) {
                setTheme(savedTheme);
            }
        } catch (error) {
            console.warn("Failed to read theme preference", error);
        }
    }, []);

    useEffect(() => {
        // Apply theme class to body
        document.body.classList.remove('theme-blue', 'theme-white');
        document.body.classList.add(`theme-${theme}`);
    }, [theme]);

    const toggleTheme = (newTheme) => {
        setTheme(newTheme);
        try {
            localStorage.setItem("appTheme", newTheme);
        } catch (error) {
            console.warn("Failed to save theme preference", error);
        }
    };



    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}

export function useTheme() {
    return useContext(ThemeContext);
}
