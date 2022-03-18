/**
 * @jest-environment jsdom
 */

import React from 'react'
import { cleanup, render } from '@testing-library/react'
import Loader from '../index'

jest.mock('../../../hooks/useOnScreen', () => () => true)
afterEach(cleanup)

describe('Loader', () => {
  it('Render on screen', () => {
    const { container } = render(<Loader onChange={jest.fn()} />)

    expect(container).toMatchSnapshot()
  })
})
