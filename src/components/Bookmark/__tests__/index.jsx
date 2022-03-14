/**
 * @jest-environment jsdom
 */

import React from 'react'
import { cleanup, render } from '@testing-library/react'
import { Provider } from 'react-redux'
import Bookmark from '../index'
import mockStore from '../../../__mocks__/store'

let store
beforeEach(() => {
  store = mockStore()
})
afterEach(cleanup)

describe('Bookmark', () => {
  it('Render off', () => {
    const { container } = render(
      <Provider store={store}>
        <Bookmark bookmark={false} id="1" />
      </Provider>
    )

    expect(container).toMatchSnapshot()
  })

  it('Render on', () => {
    const { container } = render(
      <Provider store={store}>
        <Bookmark bookmark id="1" />
      </Provider>
    )

    expect(container).toMatchSnapshot()
  })
})
