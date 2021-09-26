import React from 'react'
import Searchbar from '../components/Searchbar'
import CharacterInfo from '../components/CharacterInfo'
import CardsGallery from '../components/CardsGallery'

function Comics() {
  return (
    <>
      {/* <Searchbar /> */}
      <CharacterInfo
        data={{
          imageUrl: 'http://i.annihil.us/u/prod/marvel/i/mg/c/e0/535fecbbb9784.jpg',
          caption: '3D-Man',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu neque interdum, luctus nisl id, iaculis lacus.'
        }}
      />
      <CardsGallery />
    </>
  )
}

export default Comics
