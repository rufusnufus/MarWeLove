/**
 * @jest-environment jsdom
 */

import React from 'react'
import { cleanup, render } from '@testing-library/react'
import CardsGallery from '../index'

afterEach(cleanup)

const mockData = [
  {
    id: 1011334,
    thumbnail: {
      path: 'http://i.annihil.us/u/prod/marvel/i/mg/c/e0/535fecbbb9784',
      extension: 'jpg'
    },
    name: '3-D Man',
    description: '',
    title: 'Marvel Premiere (1972) #36'
  },
  {
    id: 1017100,
    thumbnail: {
      path: 'http://i.annihil.us/u/prod/marvel/i/mg/3/20/5232158de5b16',
      extension: 'jpg'
    },
    name: 'A-Bomb (HAS)',
    description: "Rick Jones has been Hulk's best bud since day one",
    title: 'Hulk (2008) #53'
  }
]

describe('CardsGallery', () => {
  describe('Characters', () => {
    it('Render', () => {
      const { queryByText } = render(<CardsGallery type="characters" data={mockData} />)

      expect(queryByText('3-D Man')).toBeTruthy()
      expect(queryByText('A-Bomb (HAS)')).toBeTruthy()
    })
  })

  describe('Comics', () => {
    it('Render', () => {
      const { queryByText } = render(<CardsGallery type="comics" data={mockData} />)

      expect(queryByText('Marvel Premiere (1972) #36')).toBeTruthy()
      expect(queryByText('Hulk (2008) #53')).toBeTruthy()
    })
  })
})