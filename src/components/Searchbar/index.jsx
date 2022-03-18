import React from 'react'

import './index.css'

function Searchbar({ onSubmit }) {
  const inputKeyUp = (e) => {
    if (e.key === 'Enter') {
      onSubmit(e.target.value)
    }
  }

  return (
    <div className="searchbar">
      <img src="images/search.png" alt="" className="searchbar__logo" />
      <input type="text" placeholder="Search" className="searchbar__search" onKeyUp={inputKeyUp} />
    </div>
  )
}

export default Searchbar
