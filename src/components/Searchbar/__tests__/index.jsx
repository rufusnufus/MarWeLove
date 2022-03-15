/**
 * @jest-environment jsdom
 */

import React from 'react'
import { cleanup, render } from '@testing-library/react'
import Searchbar from '../index'

afterEach(cleanup)

describe('SearchBar', () => {
  it('Render', () => {
    const { container } = render(<Searchbar onSubmit={jest.fn()} />)

    expect(container).toMatchSnapshot()
  })
})
