import React from 'react'
import { Button } from '@material-ui/core'

export default ({ disabled }) => (
  <Button variant="contained" color="primary" type="submit" disabled={disabled}>
    Finalizar
  </Button>
)
