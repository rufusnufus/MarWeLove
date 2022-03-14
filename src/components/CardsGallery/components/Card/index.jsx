import React from 'react'
import { useHistory } from 'react-router-dom'
import Bookmark from '../../../Bookmark'

import './index.css'

function Card({ data, type }) {
  const history = useHistory()
  const handleClick = () => {
    history.replace(`/${type}/${data.id}`)
  }

  return (
    // eslint-disable-next-line jsx-a11y/no-static-element-interactions
    <div className="card">
      <div
        role="navigation"
        onClick={handleClick}
        className="card__image"
        style={{ backgroundImage: `url(${data.thumbnail?.path}.${data.thumbnail?.extension})` }}
      />
      <div className="bookmark__container">
        <div className="card__caption">{type === 'characters' ? data.name : data.title}</div>
        <Bookmark id={data.id} bookmark={data.bookmark} />
      </div>
    </div>
  )
}

export default Card
