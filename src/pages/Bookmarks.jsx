import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import Searchbar from '../components/Searchbar'
import CardsGallery from '../components/CardsGallery'
import Loading from '../components/Loading'
import Loader from '../components/Loader'
import apiService from '../services/apiService'

function Bookmarks() {
  const [data, setData] = useState([])
  const [isSubscribed, setIsSubscribed] = useState(true)
  const [offset, setOffset] = useState(0)
  const [query, setQuery] = useState('')
  const [loading, setLoading] = useState(true)
  const [loaderVisible, setLoaderVisible] = useState(false)
  const token = useSelector((state) => state.user.token)
  const onlyBookmarked = true

  useEffect(() => {
    setIsSubscribed(true)
    apiService
      .getCharacters({ query, offset, onlyBookmarked }, token)
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
  }, [offset, token, onlyBookmarked])

  const onSubmit = (q) => {
    setQuery(q)
    setLoading(true)
    apiService
      .getCharacters({ query: q, only_bookmarked: true }, token)
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

export default Bookmarks
