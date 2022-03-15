/**
 * @jest-environment jsdom
 */

import React from 'react'
import 'jest-styled-components'
import { cleanup, render } from '@testing-library/react'
import ComicInfo from '../index'

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

describe('CharacterInfo', () => {
  it('Character Name', () => {
    const { queryByText } = render(<ComicInfo data={mockData} />)

    expect(queryByText('Sentry, the (Trade Paperback)')).toBeTruthy()
  })

  it('Character Description', () => {
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

//   describe('Comic', () => {
//     it('Render', () => {
//       const { queryByText } = render(<Card type="comics" data={mockData} />)

//       expect(queryByText('comic')).toBeTruthy()
//     })
//   })
