import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import Searchbar from '../components/Searchbar'
import CardsGallery from '../components/CardsGallery'
import Loading from '../components/Loading'
import Loader from '../components/Loader'
import apiService from '../services/apiService'

function Comics() {
  const [data, setData] = useState([])
  const [offset, setOffset] = useState(0)
  const [isSubscribed, setIsSubscribed] = useState(true)
  const [query, setQuery] = useState('')
  const [loading, setLoading] = useState(true)
  const [loaderVisible, setLoaderVisible] = useState(false)
  const token = useSelector((state) => state.user.token)

  useEffect(() => {
    setIsSubscribed(true)
    apiService
      .getComics({ query, offset }, token)
      .then((results) => {
        if (isSubscribed) {
          setLoaderVisible(results.length === 20)
          setData((state) => [...state, ...results])
        }
      })
      .finally(() => {
        if (isSubscribed) setLoading(false)
      })

    return () => setIsSubscribed(false)
  }, [offset, token])

  const onSubmit = (q) => {
    setQuery(q)
    setLoading(true)
    apiService
      .getComics({ query: q }, token)
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
        <CardsGallery type="comics" data={data} />
        {loaderVisible && <Loader onChange={() => setOffset((state) => state + 20)} />}
      </Loading>
    </>
  )
}

export default Comics
