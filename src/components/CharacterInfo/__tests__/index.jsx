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
    path: '',
    extension: ''
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
