/**
 * @jest-environment jsdom
 */

import React from 'react'
import { cleanup, render, fireEvent, act } from '@testing-library/react'
import { Provider } from 'react-redux'
import NameForm from '../index'
import mockStore from '../../../__mocks__/store'
import apiService from '../../../services/apiService'

let store
beforeEach(() => {
  store = mockStore()
})
afterEach(cleanup)

jest.mock('../../../services/apiService', () => ({
  performRegister: jest.fn(),
  performLogin: jest.fn()
}))

describe('NameForm', () => {
  it('Render', () => {
    const { container } = render(
      <Provider store={store}>
        <NameForm />
      </Provider>
    )

    expect(container).toMatchSnapshot()
  })

  describe('Success on submit', () => {
    it('Register', async () => {
      apiService.performRegister.mockImplementation(
        () =>
          new Promise((resolve) => {
            resolve()
          })
      )

      const { getByText } = render(
        <Provider store={store}>
          <NameForm />
        </Provider>
      )

      await act(async () => {
        fireEvent.click(getByText('Register'))
        expect(apiService.performRegister).toHaveBeenLastCalledWith('', '')
      })
    })

    // it('Login', async () => {
    //   apiService.performLogin.mockImplementation(
    //     () =>
    //       new Promise((resolve) => {
    //         resolve('token')
    //       })
    //   )

    //   const { getByText } = render(
    //     <Provider store={store}>
    //       <NameForm />
    //     </Provider>
    //   )

    //   await act(async () => {
    //     fireEvent.click(getByText('Login'))
    //     expect(apiService.performLogin).toHaveBeenLastCalledWith('', '')
    //   })
    // })
  })
})
