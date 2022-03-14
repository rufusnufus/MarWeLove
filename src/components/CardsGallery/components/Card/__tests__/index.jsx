/**
 * @jest-environment jsdom
 */

import React from 'react'
import { Provider } from 'react-redux'
import { MemoryRouter } from 'react-router-dom'
import '@testing-library/jest-dom/extend-expect'
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
    path: 'abc',
    extension: 'def'
  },
  name: 'character',
  title: 'comic'
}

const mockDataWithoutThumbnail = {
  id: 1009148,
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

jest.mock('../../../../Bookmark', () => () => 'Bookmark')

describe('Card', () => {
  describe('Character', () => {
    it('Render', () => {
      const { queryByText, getByTestId } = render(
        <Provider store={store}>
          <Card type="characters" data={mockData} />
        </Provider>
      )

      expect(queryByText('character')).toBeTruthy()
      expect(getByTestId('card__image')).toHaveStyle(
        `background-image: url(${mockData.thumbnail.path}.${mockData.thumbnail.extension})`
      )
      expect(queryByText('character')).toMatchSnapshot()
    })

    it('Render without thumbnail', () => {
      const { queryByText, getByTestId } = render(
        <Provider store={store}>
          <Card type="characters" data={mockDataWithoutThumbnail} />
        </Provider>
      )

      expect(queryByText('character')).toBeTruthy()
      expect(getByTestId('card__image')).toHaveStyle(
        `background-image: url(${mockDataWithoutThumbnail.thumbnail?.path}.${mockDataWithoutThumbnail.thumbnail?.path})`
      )
      expect(queryByText('character')).toMatchSnapshot()
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
      const { queryByText, getByTestId } = render(
        <Provider store={store}>
          <Card type="comics" data={mockData} />
        </Provider>
      )

      expect(queryByText('comic')).toBeTruthy()
      expect(getByTestId('card__image')).toHaveStyle(
        `background-image: url(${mockData.thumbnail.path}.${mockData.thumbnail.extension})`
      )
      expect(queryByText('comic')).toMatchSnapshot()
    })

    it('Render without thumbnail', () => {
      const { queryByText, getByTestId } = render(
        <Provider store={store}>
          <Card type="comics" data={mockDataWithoutThumbnail} />
        </Provider>
      )

      expect(queryByText('comic')).toBeTruthy()
      expect(getByTestId('card__image')).toHaveStyle(
        `background-image: url(${mockDataWithoutThumbnail.thumbnail?.path}.${mockDataWithoutThumbnail.thumbnail?.path})`
      )
      expect(queryByText('comic')).toMatchSnapshot()
    })

    it('After click route path changes', () => {
      const { queryByText } = render(
        <Provider store={store}>
          <MemoryRouter>
            <Card type="comics" data={mockData} />
          </MemoryRouter>
        </Provider>
      )

      fireEvent.click(queryByText('comic'))
      expect(mockHistoryReplace).toHaveBeenCalledWith('/comics/1009148')
    })
  })
})
