import React, { useEffect, useState } from 'react'
import Searchbar from '../components/Searchbar'
import CardsGallery from '../components/CardsGallery'
import Loading from '../components/Loading'
import Loader from '../components/Loader'
import apiService from '../services/apiService'

function Characters() {
  const [data, setData] = useState([])
  const [offset, setOffset] = useState(0)
  const [query, setQuery] = useState('')
  const [loading, setLoading] = useState(true)
  const [loaderVisible, setLoaderVisible] = useState(false)

  useEffect(() => {
    apiService
      .getCharacters({ query, offset })
      .then((results) => {
        setLoaderVisible(results.length === 20)
        setData((state) => [...state, ...results])
      })
      .finally(() => {
        setLoading(false)
      })
  }, [offset])

  const onSubmit = (query) => {
    setQuery(query)
    setLoading(true)
    apiService
      .getCharacters({ query })
      .then((results) => {
        setLoaderVisible(results.length === 20)
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
        {loaderVisible && <Loader onChange={() => setOffset((state) => state + 20)} />}
      </Loading>
    </>
  )
}

export default Characters
