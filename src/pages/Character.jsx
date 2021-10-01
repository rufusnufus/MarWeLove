import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import CharacterInfo from '../components/CharacterInfo'
import CardsGallery from '../components/CardsGallery'
import Loading from '../components/Loading'
import apiService from '../services/apiService'

function Character() {
  const { id } = useParams()
  const [isSubscribed, setIsSubscribed] = useState(true)
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState({})

  useEffect(() => {
    apiService
      .getCharacter(id)
      .then((results) => {
        if (isSubscribed) setData(results)
      })
      .finally(() => {
        if (isSubscribed) setLoading(false)
      })
    return () => setIsSubscribed(false)
  }, [])

  return (
    <Loading loading={loading}>
      <CharacterInfo data={data.info} />
      <CardsGallery type="comics" data={data.comics} />
    </Loading>
  )
}

export default Character
