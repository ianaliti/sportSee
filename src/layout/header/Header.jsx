import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../../assets/logo/sportsee-logo.png'
import './Header.css'

export default function Header() {
    return (
        <header className="header">
            <nav>
                <div className='logo'>
                    <NavLink to='/'><img src={logo} alt="logo" /></NavLink>
                </div>
                    <NavLink to='/'>Accueil</NavLink>
                    <NavLink to='/profile'>Profil</NavLink>
                    <NavLink to='/reglage'>Réglage</NavLink>
                    <NavLink to='/communaute'>Communauté</NavLink>
            </nav>
        </header>
    )
}
