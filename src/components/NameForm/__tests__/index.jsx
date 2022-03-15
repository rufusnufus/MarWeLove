/**
 * @jest-environment jsdom
 */

import React from 'react'
import { cleanup, render } from '@testing-library/react'
import { Provider } from 'react-redux'
import NameForm from '../index'
import mockStore from '../../../__mocks__/store'

let store
beforeEach(() => {
  store = mockStore()
})
afterEach(cleanup)

describe('NameForm', () => {
  it('Render', () => {
    const { container } = render(
      <Provider store={store}>
        <NameForm />
      </Provider>
    )

    expect(container).toMatchSnapshot()
  })
})
