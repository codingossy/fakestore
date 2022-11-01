import React, { createContext, useState, useEffect, useContext} from 'react';

const CartContext = createContext()

const AppProvider =  ( { children }) => {
    const [theme, setTheme] = useState(JSON.parse(localStorage.getItem('theme')) || false );

    useEffect(()=>{
        localStorage.setItem('theme', JSON.stringify(theme));
    },[theme]);

    const setThemeMode = mode => setTheme(mode);

    return (
        <CartContext.Provider value={{
            theme, setThemeMode
        }}>
            {children}
        </CartContext.Provider>
    )
    
}

export const GlobalThemeProvider = () => {
    const {theme} = useContext(CartContext)
    return [theme]
}

export { CartContext, AppProvider}