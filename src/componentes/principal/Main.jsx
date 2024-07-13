import React, { useContext, useEffect, useState } from 'react'
import { CartContext } from '../../context/CartContext';
import { PantallaDeCarga } from '../PantallaDeCarga';

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
                <img className='contenedorLogin__logo' src="./public/media/logo__sf__letrasAzules.png" />
                <p className='contenedorLogin__texto titulo'>¡Hola!</p>
                <p className='contenedorLogin__texto'>Accede por primera vez con tus datos</p>
                <input placeholder='DNI' className='contenedorLogin__input' type="text" name="textoSaludar" value={textoSaludar} onChange={imprimirSaludo} required></input>
                {error && <p className='contenedorLogin__error'>{error}</p>}
                <button className='contenedorLogin__boton' onClick={campoVacio}>Siguiente</button>
            </div>
        </div>
    )
}
