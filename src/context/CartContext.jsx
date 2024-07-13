import { createContext, useEffect, useState } from "react";
import { PantallaDeCarga } from "../componentes/PantallaDeCarga";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {

    const [isLoading, setIsLoading] = useState(true);

    useEffect(()=>{
        const temporizador = setTimeout(() =>{
            setIsLoading(false);
        },3000);

        return () => clearTimeout(temporizador)
    })

    const saludar = (saludo) => {
        alert(saludo);
    }

    if(isLoading){
        return <PantallaDeCarga/>;
    }


    return (
        <CartContext.Provider value={{ saludar

        }}>

            {children}
        </CartContext.Provider>
    )

}