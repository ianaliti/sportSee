import React from 'react'
import { Link } from 'react-router-dom'
import './SideBar.css'
import Button from '../../components/button/Button';
import meditation from '../../assets/icons_button/meditation.png'
import dummbell from '../../assets/icons_button/dummbell.png'
import biking from '../../assets/icons_button/biking.png'
import swimming from '../../assets/icons_button/swimming.png'

export default function SideBar() {
    return (
        <aside className='side-bar'>
            <div className='sidebar-span'>
                <Link><Button icon={meditation} /></Link>
                <Link><Button icon={swimming} /></Link>
                <Link><Button icon={biking} /></Link>
                <Link><Button icon={dummbell} /></Link>
                <span>Copiryght, SportSee 2020</span>
            </div>
        </aside>
    )
}
