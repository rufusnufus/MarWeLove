import React, { useEffect, useState } from 'react'
import Searchbar from '../components/Searchbar'
import CardsGallery from '../components/CardsGallery'
import Loading from '../components/Loading'

const axios = require('axios')

function Characters() {
  const [data, setData] = useState({})
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    axios
      .get(`http://localhost:8000/characters`)
      .then((response) => {
        setData(response.data.data.results)
      })
      .finally(() => {
        setLoading(false)
      })
  }, [])

  return (
    <>
      <Searchbar />
      <Loading loading={loading}>
        <CardsGallery type="characters" data={data} />
      </Loading>
    </>
  )
}

export default Characters
