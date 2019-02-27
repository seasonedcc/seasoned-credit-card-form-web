import React from 'react'
import { Formik } from 'formik'
import renderForm from './form/render'
import validate from './form/validate'

export default ({ create, creating, error, ...props }) => {
  return (
    <Formik
      initialValues={{
        name: '',
        number: '',
        expiry: '',
        cvc: '',
      }}
      validate={validate(props)}
      onSubmit={create}
      render={renderForm({ ...props, creating, error })}
    />
  )
}
