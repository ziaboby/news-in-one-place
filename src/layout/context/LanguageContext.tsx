import React, { useState } from 'react';
import { LANGUAGES } from '../../settings';

const userBrowserLanguage = (window.navigator.language || '').substring(0, 2),
    settings = {
        selectedLanguage: (LANGUAGES.includes(userBrowserLanguage) && userBrowserLanguage) || 'it',
        setLanguage: () => false
    };

interface ContextInterface {
    selectedLanguage: string;
    setLanguage: (language: string) => void;
}

export const LanguageContext = React.createContext<ContextInterface>(settings);

export const LanguageContextProvider: React.FC = ({ children }) => {
    const [selectedLanguage, setLanguage] = useState(settings.selectedLanguage);
    return (
        <LanguageContext.Provider value={{ selectedLanguage, setLanguage }}>
            {children}
        </LanguageContext.Provider>
    );
};
