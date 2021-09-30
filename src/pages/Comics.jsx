import React, { useEffect, useState } from 'react'
import Searchbar from '../components/Searchbar'
import CardsGallery from '../components/CardsGallery'
import Loading from '../components/Loading'
import apiService from '../services/apiService'

function Comics() {
  const [data, setData] = useState({})
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    apiService
      .getComics()
      .then((results) => {
        setData(results)
      })
      .finally(() => {
        setLoading(false)
      })
  }, [])

  const onSubmit = (query) => {
    setLoading(true)
    apiService
      .getComics(query)
      .then((results) => {
        setData(results)
      })
      .finally(() => {
        setLoading(false)
      })
  }

  return (
    <>
      <Searchbar onSubmit={onSubmit} />
      <Loading loading={loading}>
        <CardsGallery type="comics" data={data} />
      </Loading>
    </>
  )
}

export default Comics
