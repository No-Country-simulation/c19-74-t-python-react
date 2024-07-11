import React from 'react'
import { NavBar } from './NavBar'
import { Link } from 'react-router-dom'

export const Header = () => {

    return (
        <header className='cabecera'>
            <Link to="/"><img className="cabecera__logo" src='./public/media/logo.png' alt="logo trabajo"/></Link>
            <NavBar/>
        </header>
    )
}