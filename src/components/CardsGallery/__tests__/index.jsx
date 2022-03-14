/**
 * @jest-environment jsdom
 */

import React from 'react'
import { cleanup, render } from '@testing-library/react'
import { Provider } from 'react-redux'
import CardsGallery from '../index'
import mockStore from '../../../__mocks__/store'

const mockData = [
  {
    id: 1011334,
    thumbnail: {
      path: '',
      extension: ''
    },
    name: '3-D Man',
    description: '',
    title: 'Marvel Premiere (1972) #36'
  },
  {
    id: 1017100,
    thumbnail: {
      path: '',
      extension: ''
    },
    name: 'A-Bomb (HAS)',
    description: "Rick Jones has been Hulk's best bud since day one",
    title: 'Hulk (2008) #53'
  }
]

let store
beforeEach(() => {
  store = mockStore()
})
afterEach(cleanup)

describe('CardsGallery', () => {
  describe('Characters', () => {
    it('Render', () => {
      const { queryByText } = render(
        <Provider store={store}>
          <CardsGallery type="characters" data={mockData} />
        </Provider>
      )

      expect(queryByText('3-D Man')).toBeTruthy()
      expect(queryByText('A-Bomb (HAS)')).toBeTruthy()
    })
  })

  describe('Comics', () => {
    it('Render', () => {
      const { queryByText } = render(
        <Provider store={store}>
          <CardsGallery type="comics" data={mockData} />
        </Provider>
      )

      expect(queryByText('Marvel Premiere (1972) #36')).toBeTruthy()
      expect(queryByText('Hulk (2008) #53')).toBeTruthy()
    })
  })
})
