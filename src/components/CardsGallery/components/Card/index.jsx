import React from 'react'

import './index.css'

function Card({ data }) {
  return (
    <div className="card">
      <div className="card__image" style={{ backgroundImage: `url(${data.imageUrl})` }} />
      <div className="card__caption">{data.caption}</div>
    </div>
  )
}

export default Card
