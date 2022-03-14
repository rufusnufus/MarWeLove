import React from 'react'
import { NavLink } from 'react-router-dom'

import './index.css'

function Header({ name }) {
  return (
    <header className="header">
      <NavLink data-testid="header__logo" className="header__logo" to="/">
        Mar<span>we</span>Love
      </NavLink>
      <div className="header__navbar">
        <NavLink className="header__button" to="/characters">
          characters
        </NavLink>
        <NavLink className="header__button" to="/comics">
          comics
        </NavLink>
        <NavLink className="header__button" to="/bookmarks">
          bookmarks
        </NavLink>
      </div>
      <span className="header__name">{name}</span>
    </header>
  )
}

export default Header
