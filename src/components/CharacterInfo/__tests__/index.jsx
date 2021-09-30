/**
 * @jest-environment jsdom
 */

import React from 'react'
import { cleanup, render } from '@testing-library/react'
import CharacterInfo from '../index'

afterEach(cleanup)

const mockData = {
  id: 1009144,
  name: 'Abyss (Age of Apocalypse)',
  description: 'AIM is a terrorist organization bent on destroying the world.',
  thumbnail: {
    path: 'http://i.annihil.us/u/prod/marvel/i/mg/6/20/52602f21f29ec',
    extension: 'jpg'
  }
}

describe('CharacterInfo', () => {
  it('Character Name', () => {
    const { queryByText } = render(<CharacterInfo data={mockData} />)

    expect(queryByText('Abyss (Age of Apocalypse)')).toBeTruthy()
  })

  it('Character Description', () => {
    const { queryByText } = render(<CharacterInfo data={mockData} />)

    expect(queryByText('AIM is a terrorist organization bent on destroying the world.')).toBeTruthy()
  })
})
