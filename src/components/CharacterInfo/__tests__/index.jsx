/**
 * @jest-environment jsdom
 */

import React from 'react'
import { cleanup, render } from '@testing-library/react'
import CharacterInfo from '../index'

jest.mock('../../Bookmark', () => () => 'Bookmark')
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

const mockDataWithoutThumbnail = {
  id: 1009144,
  name: 'Abyss (Age of Apocalypse)',
  description: 'AIM is a terrorist organization bent on destroying the world.'
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

  it('Render with thumbnail', () => {
    const { container } = render(<CharacterInfo data={mockData} />)

    expect(container).toMatchSnapshot()
  })

  it('Render without thumbnail', () => {
    const { container } = render(<CharacterInfo data={mockDataWithoutThumbnail} />)

    expect(container).toMatchSnapshot()
  })
})
