import React, { useState } from 'react'
import { useFormik } from 'formik'
import { useDispatch } from 'react-redux'
import { setName, setToken } from '../../store/slices/user'

import './index.css'
import apiService from '../../services/apiService'

const NameForm = () => {
  const dispatch = useDispatch()
  const [status, setStatus] = useState('')

  const formik = useFormik({
    initialValues: {
      name: '',
      password: ''
    },
    onSubmit: (values) => {
      const { name, password } = values
      apiService
        .performLogin(name, password)
        .then((results) => {
          dispatch(setName(values.name))
          dispatch(setToken(results))
        })
        .catch(() => {
          setStatus('ERROR')
        })
    }
  })

  function handleRegister(values) {
    const { name, password } = values
    apiService
      .performRegister(name, password)
      .then(() => {
        setStatus('OK')
      })
      .catch(() => {
        setStatus('ERROR')
      })
  }

  return (
    <form className="name-form" onSubmit={formik.handleSubmit}>
      <label htmlFor="name">
        What`s your name, <span>hero</span>?
      </label>

      <input id="name" name="name" type="text" onChange={formik.handleChange} value={formik.values.name} />
      <input
        id="password"
        name="password"
        type="password"
        onChange={formik.handleChange}
        value={formik.values.password}
      />

      <button onClick={() => handleRegister(formik.values)} type="button">
        Register
      </button>
      <button type="submit">Login</button>
      {status === 'OK' && <p> Registration completed </p>}
      {status === 'ERROR' && <p> Request failed </p>}
    </form>
  )
}

export default NameForm
