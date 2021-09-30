import React, { useEffect, useState } from 'react'
import Searchbar from '../components/Searchbar'
import CardsGallery from '../components/CardsGallery'
import Loading from '../components/Loading'
import apiService from '../services/api.service'

function Characters() {
  const [data, setData] = useState({})
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    apiService
      .getCharacters()
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
      .getCharacters(query)
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
        <CardsGallery type="characters" data={data} />
      </Loading>
    </>
  )
}

export default Characters
