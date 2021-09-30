/**
 * @jest-environment jsdom
 */

import React from 'react'
import { cleanup, render } from '@testing-library/react'
import Card from '../index'
import {describe} from 'jest-circus'

afterEach(cleanup)

const mockData = {
  id: 1,
  thumbnail: {
    path: '',
    extension: ''
  },
  name: 'character',
  title: 'comic'
}

describe('Card', () => {
  describe('Characters', () => {
    it('Render', () => {
      const { queryByText } = render(<Card type="characters" data={mockData} />)

      expect(queryByText('character')).toBeTruthy()
    })
  })

  describe('Comic', () => {
    it("Render", () => {
      const { queryByText } = render(<Card type="comics" data={mockData} />)

      expect(queryByText('comic')).toBeTruthy()
    })
  })
})
