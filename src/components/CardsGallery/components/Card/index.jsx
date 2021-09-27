import React from 'react'

import './index.css'

function Card({ data }) {
  return (
    <div className="card">
      <div
        className="card__image"
        style={{ backgroundImage: `url(${data.thumbnail?.path}.${data.thumbnail?.extension})` }}
      />
      <div className="card__caption">{data.name}</div>
    </div>
  )
}

export default Card
