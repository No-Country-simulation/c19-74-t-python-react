import { createContext } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {

    const saludar = (saludo) => {
        alert(saludo);
    }


    return (
        <CartContext.Provider value={{ saludar

        }}>

            {children}
        </CartContext.Provider>
    )

}