import { createContext, useReducer } from "react";

// Create a context for the theme
export const ThemeContext = createContext();

// Define the theme reducer function
const themeReducer = (state, action) => {
    switch (action.type) {
        case 'CHANGE_THEME':
            return { ...state, theme: action.payload }; // Use 'theme' instead of 'color'
        default:
            return state;
    }
};

// Define the ThemeProvider component
export function ThemeProvider({ children }) {
    // Initialize state with useReducer
    const [state, dispatch] = useReducer(themeReducer, {
        theme: 'dark', // Initial state uses 'theme'
    });

    // Define a function to change the theme
    const ThemeChanger = (theme) => {
        dispatch({ type: 'CHANGE_THEME', payload: theme }); // Use 'theme' instead of 'color'
    };

    // Return the context provider with the current state and ThemeChanger function
    return (
        <ThemeContext.Provider value={{ ...state, ThemeChanger }}>
            {children}
        </ThemeContext.Provider>
    );
}
