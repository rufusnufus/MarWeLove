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
    <div role="navigation" className="card" onClick={handleClick}>
      <Bookmark id={data.id} bookmark={data.bookmark} type={type} />
      <div
        className="card__image"
        data-testid="card__image"
        style={{ backgroundImage: `url(${data.thumbnail?.path}.${data.thumbnail?.extension})` }}
      />
      <div className="card__caption">{type === 'characters' ? data.name : data.title}</div>
    </div>
  )
}

export default Card
