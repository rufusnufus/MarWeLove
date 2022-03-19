/**
 * @jest-environment jsdom
 */

import React from 'react'
import 'jest-styled-components'
import { cleanup, render } from '@testing-library/react'
import ComicInfo from '../index'

jest.mock('../../Bookmark', () => () => 'Bookmark')
afterEach(cleanup)

const mockData = {
  id: 1003,
  title: 'Sentry, the (Trade Paperback)',
  description: 'A forgotten hero, he must unravel the conspiracy to erase his memory.',
  thumbnail: {
    path: '',
    extension: ''
  }
}

const mockDataWithoutThumbnail = {
  id: 1003,
  title: 'Sentry, the (Trade Paperback)',
  description: 'A forgotten hero, he must unravel the conspiracy to erase his memory.'
}

describe('ComicInfo', () => {
  it('Comics Title', () => {
    const { queryByText } = render(<ComicInfo data={mockData} />)

    expect(queryByText('Sentry, the (Trade Paperback)')).toBeTruthy()
  })

  it('Comic Description', () => {
    const { queryByText } = render(<ComicInfo data={mockData} />)

    expect(queryByText('A forgotten hero, he must unravel the conspiracy to erase his memory.')).toBeTruthy()
  })

  it('Render with thumbnail', () => {
    const { container } = render(<ComicInfo data={mockData} />)

    expect(container).toMatchSnapshot()
  })

  it('Render without thumbnail', () => {
    const { container } = render(<ComicInfo data={mockDataWithoutThumbnail} />)

    expect(container).toMatchSnapshot()
  })
})
