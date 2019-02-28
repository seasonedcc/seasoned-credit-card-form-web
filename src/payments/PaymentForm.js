import React from 'react'
import { Formik } from 'formik'
import PropTypes from 'prop-types'

import FormContainer from './form/FormContainer'
import validate from './form/validate'

const PaymentForm = ({ onSubmit, ...props }) => {
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
      render={options => <FormContainer {...props} {...options} />}
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
  acceptedCards: PropTypes.arrayOf(
    PropTypes.oneOf([
      'visa',
      'amex',
      'elo',
      'mastercard',
      'diners',
      'hipercard',
    ]),
  ),
  language: PropTypes.oneOf(['en-US', 'pt-BR']),
  buttonMessage: PropTypes.string,
}

export default PaymentForm
