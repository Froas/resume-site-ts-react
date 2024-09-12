import * as React from 'react';
import { createContext, useState, ReactNode, useContext } from 'react';
import i18n from '../utils/i18n';

interface LanguageContextProps {
    language: string;
    toggleLanguage: (lang: string) => void;
}
  

const LanguageContext = createContext<LanguageContextProps | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
    const [language, setLanguage] = useState<string>('en');

    const toggleLanguage = (lang: string) => {
        setLanguage(lang);
        i18n.changeLanguage(lang);
    }

    return(
        <LanguageContext.Provider value={{language, toggleLanguage}}>
            {children}
        </LanguageContext.Provider>
    )
}

export const useLanguage = () => {
    const context = useContext(LanguageContext)
    if (!context) {
        throw new Error("useLanguage must be used withi a LanguageProvider") 
    }
    return context;
}