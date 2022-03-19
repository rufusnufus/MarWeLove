import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import CardsGallery from '../components/CardsGallery'
import Loading from '../components/Loading'
import Loader from '../components/Loader'
import apiService from '../services/apiService'

function Bookmarks({ type = 'characters' }) {
  const [data, setData] = useState([])
  const [isSubscribed, setIsSubscribed] = useState(true)
  const [offset, setOffset] = useState(0)
  const [loading, setLoading] = useState(true)
  const [loaderVisible, setLoaderVisible] = useState(false)
  const token = useSelector((state) => state.user.token)
  const onlyBookmarked = true

  useEffect(() => {
    setData([])
  }, [type])

  useEffect(() => {
    setIsSubscribed(true)
    const resultingPromise =
      type === 'characters'
        ? apiService.getCharacters({ query: '', offset, onlyBookmarked }, token)
        : apiService.getComics({ query: '', offset, onlyBookmarked }, token)

    resultingPromise
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
  }, [offset, token, onlyBookmarked, type])

  return (
    <>
      <Loading loading={loading}>
        <CardsGallery type={type} data={data} />
        {loaderVisible && <Loader onChange={() => setOffset((state) => state + 20)} />}
      </Loading>
    </>
  )
}

export default Bookmarks
