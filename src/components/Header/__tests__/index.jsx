/**
 * @jest-environment jsdom
 */

import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { cleanup, render } from '@testing-library/react'
import Header from '../index'

afterEach(cleanup)

const mockHistoryReplace = jest.fn()

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useHistory: () => ({
    replace: mockHistoryReplace
  })
}))

describe('Header', () => {
  it('Logo', () => {
    const { queryByTestId } = render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    )

    expect(queryByTestId('header__logo')).toBeTruthy()
  })

  it('Characters', () => {
    const { queryByText } = render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    )

    expect(queryByText('characters')).toBeTruthy()
  })

  it('Comics', () => {
    const { queryByText } = render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    )

    expect(queryByText('comics')).toBeTruthy()
  })
})
