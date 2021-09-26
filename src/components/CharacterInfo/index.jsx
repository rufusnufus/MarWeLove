import React from 'react'

import './index.css'

function CharacterInfo({ data }) {
  return (
    <div className="characterinfo">
      <div className="characterinfo__text">
        <div className="characterinfo__name">{data.caption}</div>
        <div className="characterinfo__description">{data.description}</div>
      </div>
      <div className="characterinfo__image" style={{ backgroundImage: `url(${data.imageUrl})` }} />
    </div>
  )
}

export default CharacterInfo
