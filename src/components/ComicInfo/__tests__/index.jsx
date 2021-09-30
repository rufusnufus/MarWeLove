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
    path: 'http://i.annihil.us/u/prod/marvel/i/mg/f/c0/4bc66d78f1bee',
    extension: 'jpg'
  }
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
})

//   describe('Comic', () => {
//     it('Render', () => {
//       const { queryByText } = render(<Card type="comics" data={mockData} />)

//       expect(queryByText('comic')).toBeTruthy()
//     })
//   })
