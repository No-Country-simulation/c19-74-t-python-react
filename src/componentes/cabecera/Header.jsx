import React from 'react'
import { NavBar } from './NavBar'
import { Logo } from './Logo'

export const Header = () => {

    return (
        <header className='cabecera'>
            <Logo/>
            <NavBar/>
        </header>
    )
}