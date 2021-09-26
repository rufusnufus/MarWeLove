import React from 'react'
import { NavLink } from 'react-router-dom'

import './index.css'

function Header() {
  return (
    <div className="header">
      <NavLink className="header__logo" to="/">
        Mar<span>we</span>Love
      </NavLink>
      <div className="header__navbar">
        <NavLink className="header__button" to="/characters">
          characters
        </NavLink>
        <NavLink className="header__button" to="/comics">
          comics
        </NavLink>
      </div>
    </div>
  )
}

export default Header
