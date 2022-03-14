/**
 * @jest-environment jsdom
 */

import React from 'react'
import { Provider } from 'react-redux'
import { MemoryRouter } from 'react-router-dom'
import { cleanup, fireEvent, render } from '@testing-library/react'
import Card from '../index'
import mockStore from '../../../../../__mocks__/store'

let store
beforeEach(() => {
  store = mockStore()
})
afterEach(cleanup)

const mockData = {
  id: 1009148,
  thumbnail: {
    path: '',
    extension: ''
  },
  name: 'character',
  title: 'comic'
}

const mockHistoryReplace = jest.fn()

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useHistory: () => ({
    replace: mockHistoryReplace
  })
}))

describe('Card', () => {
  describe('Character', () => {
    it('Render', () => {
      const { queryByText } = render(
        <Provider store={store}>
          <Card type="characters" data={mockData} />
        </Provider>
      )

      expect(queryByText('character')).toBeTruthy()
    })

    it('After click route path changes', () => {
      const { queryByText } = render(
        <Provider store={store}>
          <MemoryRouter>
            <Card type="characters" data={mockData} />
          </MemoryRouter>
        </Provider>
      )

      fireEvent.click(queryByText('character'))
      expect(mockHistoryReplace).toHaveBeenCalledWith('/characters/1009148')
    })
  })

  describe('Comic', () => {
    it('Render', () => {
      const { queryByText } = render(
        <Provider store={store}>
          <Card type="comics" data={mockData} />
        </Provider>
      )

      expect(queryByText('comic')).toBeTruthy()
    })
  })
})
