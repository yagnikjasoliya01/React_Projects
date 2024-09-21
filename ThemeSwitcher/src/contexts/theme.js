import { createContext , useContext } from "react";

export const ThemeContest = createContext({
    themeMode: 'light',
    darkTheme : () => {},
    lightTheme : () => {},
})

export const ThemeProvider = ThemeContest.Provider;

export default function useTheme(){
    return useContext(ThemeContest)
}