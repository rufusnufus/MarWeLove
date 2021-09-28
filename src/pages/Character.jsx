import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import CharacterInfo from '../components/CharacterInfo'
import CardsGallery from '../components/CardsGallery'
import Loading from '../components/Loading'

const axios = require('axios')

function Character() {
  const { id } = useParams()
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState({})

  useEffect(() => {
    axios
      .get(`http://localhost:8000/characters/${id}`)
      .then((response) => {
        setData(response.data)
      })
      .finally(() => {
        setLoading(false)
      })
  }, [])

  return (
    <Loading loading={loading}>
      <CharacterInfo data={data.info} />
      <CardsGallery type="comics" data={data.comics} />
    </Loading>
  )
}

export default Character
