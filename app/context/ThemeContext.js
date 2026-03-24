"use client";
import React, { createContext, useState, useContext, useEffect, useLayoutEffect } from "react";

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
    const [theme, setTheme] = useState("white"); // Default state for SSR
    const [mounted, setMounted] = useState(false);

    // Read from localStorage on mount
    useEffect(() => {
        setMounted(true);
        try {
            const savedTheme = localStorage.getItem("appTheme");
            const initialTheme = savedTheme || 'white'; // Default to 'white' if no saved theme
            setTheme(initialTheme);

            // The original else if block is now redundant as 'white' is the default
            // if (window.matchMedia("(prefers-color-scheme: light)").matches) {
            //     // If no preference and system prefers light, we could default to white?
            //     // But the user seems to want Blue as default brand color
            //     // Let's stick with blue but allow future system detection
            // }
        } catch (error) {
            console.warn("Failed to read theme preference", error);
        }
    }, []);

    // Apply theme class to document element
    useEffect(() => {
        if (!mounted) return;
        
        // Apply theme class to document element
        document.documentElement.classList.remove('theme-blue', 'theme-white');
        document.documentElement.classList.add(`theme-${theme}`);
        
        try {
            localStorage.setItem("appTheme", theme);
        } catch (error) {
            console.warn("Failed to save theme preference", error);
        }
    }, [theme, mounted]);

    const toggleTheme = (newTheme) => {
        setTheme(newTheme);
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
