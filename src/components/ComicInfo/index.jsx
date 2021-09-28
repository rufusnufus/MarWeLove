import React from 'react'

import './index.css'

function ComicInfo({ data }) {
  return (
    <div className="comicinfo">
      <div className="comicinfo__text">
        <div className="comicinfo__name">{data.title}</div>
        <div className="comicinfo__description">{data.description}</div>
      </div>
      <div
        className="comicinfo__image"
        style={{ backgroundImage: `url(${data.thumbnail?.path}.${data.thumbnail?.extension})` }}
      />
    </div>
  )
}

export default ComicInfo
