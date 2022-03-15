import React from 'react'

import './index.css'
import Bookmark from '../Bookmark'

function ComicInfo({ data }) {
  return (
    <div className="comicinfo">
      <div className="comicinfo__text">
        <div className="bookmark__container">
          <div className="comicinfo__name">{data.title}</div>
          <Bookmark id={data.id} bookmark={data.bookmark} type="comics" />
        </div>
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
