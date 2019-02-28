import React from 'react'
import { Form } from 'formik'
import Grid from '@material-ui/core/Grid'

import Error from '../../Error'
import Loading from '../../Loading'
import Button from './Button'
import FormFields from './FormFields'
import Card from './Card'

export default props => {
  const { error, submitting, buttonMessage, errors } = props
  const disabled = submitting || Object.entries(errors).length > 0

  return (
    <Form>
      <Card {...props} />
      <Grid container justify={'space-between'} style={{ margin: '30px 0' }}>
        <FormFields {...props} />
      </Grid>
      {error && <Error>{error}</Error>}
      {submitting && <Loading style={{ alignSelf: 'center' }} />}
      <Grid container justify="center">
        <Button text={buttonMessage} disabled={disabled} />
      </Grid>
    </Form>
  )
}
