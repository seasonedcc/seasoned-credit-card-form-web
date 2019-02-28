import React from 'react'
import { Formik } from 'formik'
import PropTypes from 'prop-types'

import renderForm from './form/render'
import validate from './form/validate'

const PaymentForm = ({ onSubmit, submitting, error, ...props }) => {
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

PaymentForm.defaultProps = {
  language: 'en-US',
}

PaymentForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  submitting: PropTypes.bool.isRequired,
  error: PropTypes.string,
  acceptedCards: PropTypes.arrayOf(String),
  language: PropTypes.string,
}

export default PaymentForm
