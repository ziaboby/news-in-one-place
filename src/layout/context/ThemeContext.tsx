import React, { useCallback, useState, useMemo } from 'react';
import { THEMES } from '../../constants/settings';
import { createMuiTheme, ThemeProvider } from '@material-ui/core';

type ThemeType = 'light' | 'dark';
type ThemeContextType = {
    themeType: string;
    toggleTheme?: () => void;
};

export const THEME_TYPES: ThemeType[] = ['light', 'dark'],
    { primary, secondary } = THEMES.palette;

export const ThemeContext = React.createContext<ThemeContextType>({ themeType: THEME_TYPES[0] });

export const ThemeContextProvider: React.FC = ({ children }) => {
    const [themeType, setThemeType] = useState<ThemeType>('light');
    const toggleTheme = useCallback(() => {
        setThemeType(prevThemeType => {
            const newThemeType = THEME_TYPES[+!THEME_TYPES.indexOf(prevThemeType)];
            return newThemeType;
        });
    }, [setThemeType]);
    const theme = useMemo(
        () =>
            createMuiTheme({
                palette: {
                    type: themeType,
                    primary,
                    secondary
                }
            }),
        [themeType]
    );

    return (
        <ThemeProvider theme={theme}>
            <ThemeContext.Provider value={{ themeType, toggleTheme }}>
                {children}
            </ThemeContext.Provider>
        </ThemeProvider>
    );
};
