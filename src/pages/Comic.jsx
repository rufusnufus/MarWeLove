import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ComicInfo from '../components/ComicInfo'
import CardsGallery from '../components/CardsGallery'
import Loading from '../components/Loading'

const axios = require('axios')

function Comic() {
  const { id } = useParams()
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState({})

  useEffect(() => {
    axios
      .get(`http://localhost:8000/comics/${id}`)
      .then((response) => {
        setData(response.data)
      })
      .finally(() => {
        setLoading(false)
      })
  }, [])

  return (
    <Loading loading={loading}>
      <ComicInfo data={data.info} />
      <CardsGallery type="characters" data={data.characters} />
    </Loading>
  )
}

export default Comic
