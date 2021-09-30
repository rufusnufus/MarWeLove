/**
 * @jest-environment jsdom
 */

import React from 'react'
import 'jest-styled-components'
import { MemoryRouter } from 'react-router-dom'
import { cleanup, fireEvent, render } from '@testing-library/react'
import Card from '../index'

afterEach(cleanup)

const mockData = {
  id: 1009148,
  thumbnail: {
    path: 'http://i.annihil.us/u/prod/marvel/i/mg/1/b0/5269678709fb7',
    extension: 'jpg'
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
  describe('Characters', () => {
    it('Render', () => {
      const { queryByText } = render(<Card type="characters" data={mockData} />)

      expect(queryByText('character')).toBeTruthy()
    })

    it('After click route path changes', () => {
      const { queryByText } = render(
        <MemoryRouter>
          <Card type="characters" data={mockData} />
        </MemoryRouter>
      )

      fireEvent.click(queryByText('character'))
      expect(mockHistoryReplace).toHaveBeenCalledWith('/characters/1009148')
    })
  })

  describe('Comic', () => {
    it('Render', () => {
      const { queryByText } = render(<Card type="comics" data={mockData} />)

      expect(queryByText('comic')).toBeTruthy()
    })
  })
})
