import React from "react";
import logo from './ID.png'
import './header.css'

export const Header = () => {
  return (
    <header>
      <div className="logo">
        <img src={logo} alt="" />
      </div>
      <nav className="menu">
        <ul>
          <li>Sobre mim</li>
          <li>Skills</li>
          <li>Projetos</li>
          <li>Currículo</li>
        </ul>
      </nav>
    </header>
  )
}