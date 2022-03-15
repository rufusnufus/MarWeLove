import React from 'react'
import Bookmark from '../Bookmark'

import './index.css'

function CharacterInfo({ data }) {
  return (
    <div className="characterinfo">
      <div className="characterinfo__text">
        <div className="bookmark__container">
          <div className="characterinfo__name">{data.name}</div>
          <Bookmark id={data.id} bookmark={data.bookmark} type="characters" />
        </div>
        <div className="characterinfo__description">{data.description}</div>
      </div>
      <div
        className="characterinfo__image"
        style={{ backgroundImage: `url(${data.thumbnail?.path}.${data.thumbnail?.extension})` }}
      />
    </div>
  )
}

export default CharacterInfo
