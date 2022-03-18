/**
 * @jest-environment jsdom
 */

import React from 'react'
import { cleanup, render, fireEvent } from '@testing-library/react'
import Searchbar from '../index'

afterEach(cleanup)

const onSubmit = jest.fn()

describe('SearchBar', () => {
  it('Render', () => {
    const { container } = render(<Searchbar onSubmit={onSubmit} />)

    expect(container).toMatchSnapshot()
  })

  it('Input symbol', () => {
    const { getByPlaceholderText } = render(<Searchbar onSubmit={onSubmit} />)
    fireEvent.keyUp(getByPlaceholderText('Search'), { key: 'Enter' })
    expect(onSubmit).toBeCalled()
  })
})
