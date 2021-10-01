import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ComicInfo from '../components/ComicInfo'
import CardsGallery from '../components/CardsGallery'
import Loading from '../components/Loading'
import apiService from '../services/apiService'

function Comic() {
  const { id } = useParams()
  const [isSubscribed, setIsSubscribed] = useState(true)
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState({})

  useEffect(() => {
    setIsSubscribed(true)
    apiService
      .getComic(id)
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
      <ComicInfo data={data.info} />
      <CardsGallery type="characters" data={data.characters} />
    </Loading>
  )
}

export default Comic
