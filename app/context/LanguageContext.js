"use client";
import React, { createContext, useState, useContext, useEffect } from "react";

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
    const [language, setLanguage] = useState("en");
    const [isLoaded, setIsLoaded] = useState(false);

    // Load saved preference from localStorage if available (client-side only)
    useEffect(() => {
        try {
            const savedLang = localStorage.getItem("appLanguage");
            if (savedLang) {
                setLanguage(savedLang);
            } else {
                // Auto-detect browser language if no preference saved
                const browserLang = navigator.language || navigator.userLanguage;
                if (browserLang && browserLang.startsWith("hi")) {
                    setLanguage("hi");
                }
            }
        } catch (error) {
            console.warn("Failed to read language preference", error);
        } finally {
            // Once checked (even if failed), show content
            setIsLoaded(true);
        }
    }, []);

    // Effect to apply language-specific class to body for global styling adjustments
    useEffect(() => {
        if (language === 'hi') {
            document.body.classList.add('lang-hi');
        } else {
            document.body.classList.remove('lang-hi');
        }
    }, [language]);

    const toggleLanguage = () => {
        const newLang = language === "en" ? "hi" : "en";
        try {
            localStorage.setItem("appLanguage", newLang);
            window.location.reload();
        } catch (error) {
            console.warn("Failed to save language preference", error);
            // Fallback: still update state if reload/storage fails (though unlikely)
            setLanguage(newLang);
        }
    };

    // Prevent flash of default language (English) by waiting for localStorage check
    if (!isLoaded) {
        // Return a minimal placeholder or nothing to avoid layout shift/flash
        return <div className="min-h-screen bg-[#0A1128]" />;
    }

    return (
        <LanguageContext.Provider value={{ language, toggleLanguage }}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    return useContext(LanguageContext);
}
