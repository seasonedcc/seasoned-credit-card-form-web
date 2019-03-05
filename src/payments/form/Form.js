import React from 'react'
import { Form } from 'formik'
import Grid from '@material-ui/core/Grid'
import PropTypes from 'prop-types'

import Error from '../../Error'
import Loading from '../../Loading'
import Button from './Button'
import FormFields from './FormFields'
import Card from './Card'

const PresentationalForm = props => {
  const { error, submitting, buttonMessage, errors, renderButton } = props
  const disabled = submitting || Object.entries(errors).length > 0

  return (
    <Form>
      <Card {...props} />
      <Grid container justify={'space-between'} style={{ margin: '30px 0' }}>
        <FormFields {...props} />
      </Grid>
      {error && <Error>{error}</Error>}
      {submitting && <Loading style={{ alignSelf: 'center' }} />}
      {renderButton({ type: 'submit', text: buttonMessage, disabled })}
    </Form>
  )
}

PresentationalForm.defaultProps = {
  renderButton: buttonProps => (
    <Grid container justify="center">
      <Button {...buttonProps} />
    </Grid>
  ),
}

PresentationalForm.propTypes = {
  renderButton: PropTypes.func,
}

export default PresentationalForm
