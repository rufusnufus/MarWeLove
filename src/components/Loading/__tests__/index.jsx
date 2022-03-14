/**
 * @jest-environment jsdom
 */

import React from 'react'
import { cleanup, render } from '@testing-library/react'
import Loading from '../index'

afterEach(cleanup)

describe('Loading', () => {
it('Render off', () => {
  const { container } = render(
    <Loading loading={false} />
  )

  expect(container).toMatchSnapshot()
})

it('Render on', () => {
  const { container } = render(
    <Loading loading />
  )

  expect(container).toMatchSnapshot()
})
})
 