import React, { useEffect, useState } from 'react'
import Card from './components/Card'

import './index.css'

const axios = require('axios')

function CardsGallery({ type }) {
  const [data, setData] = useState({})

  useEffect(() => {
    axios.get(`http://localhost:8000/${type}`).then((response) => {
      setData(response.data.data.results)
    })
  }, [])

  return (
    <div className="cards-gallery">
      {data.length &&
        data.map((item) => {
          return <Card key={item.id} data={item} />
        })}
    </div>
  )
}

export default CardsGallery
