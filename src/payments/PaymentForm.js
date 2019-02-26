import React from 'react'
import { Formik } from 'formik'
import renderForm from './form/render'
import validate from './form/validate'

export default ({ onSubmit, submitting, error, ...props }) => {
  return (
    <Formik
      initialValues={{
        name: '',
        number: '',
        expiry: '',
        cvc: '',
      }}
      validate={validate(props)}
      onSubmit={onSubmit}
      render={renderForm({ ...props, submitting, error })}
    />
  )
}
