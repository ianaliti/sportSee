import React from 'react'
import Header from './header/Header'
import { Outlet } from 'react-router-dom'
import SideBar from './side_bar/SideBar'
import './Layout.css'

export default function Layout() {
  return (
    <div className="layout">
        
        <SideBar />
      <div className="main-container">
             <Header />
        <main className="content">
          <div className="content-wrapper">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  )
}
