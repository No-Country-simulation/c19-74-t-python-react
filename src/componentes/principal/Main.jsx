import React, { useContext, useState } from 'react'
import { CartContext } from '../../context/CartContext';

export const Main = () => {

    const { saludar } = useContext(CartContext);

    const [textoSaludar, setTextoSaludar] = useState("");
    const [error, setError] = useState("");

    const imprimirSaludo = (event) => {
        setTextoSaludar(event.target.value);
        if (event.target.value.trim() !== "") {
            setError("");
        }
    };

    const campoVacio = () => {
        if (textoSaludar.trim() === "" || textoSaludar.trim() === null) {
            setError("Este campo es obligatorio");
        }
        else {
            saludar(textoSaludar);
        }
    }

    return (
        <div className='principal'>
            <div className='principal__contenedorLogin'>
                <p className='contenedorLogin__texto subrayado titulo'>¡Hola!</p>
                <img className='contenedorLogin__logo' src="./public/media/logo.png" />
                <p className='contenedorLogin__texto'>Ingresá tu DNI</p>
                <input className='contenedorLogin__input' type="text" name="textoSaludar" value={textoSaludar} onChange={imprimirSaludo} required></input>
                {error && <p className='contenedorLogin__error'>{error}</p>}
                <button className='contenedorLogin__boton' onClick={campoVacio}>Ingresar</button>
            </div>
        </div>
    )
}
