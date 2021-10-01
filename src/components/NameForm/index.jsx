import React from 'react'
import { useFormik } from 'formik'
import { useDispatch } from 'react-redux'
import { setName } from '../../store/slices/user'

import './index.css'

const NameForm = () => {
  const dispatch = useDispatch()

  const formik = useFormik({
    initialValues: {
      name: ''
    },

    onSubmit: (values) => {
      dispatch(setName(values.name))
    }
  })

  return (
    <form className="name-form" onSubmit={formik.handleSubmit}>
      <label htmlFor="name">
        What`s your name, <span>hero</span>?
      </label>

      <input id="name" name="name" type="text" onChange={formik.handleChange} value={formik.values.name} />

      <button type="submit">Submit</button>
    </form>
  )
}

export default NameForm
