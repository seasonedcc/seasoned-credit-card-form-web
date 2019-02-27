import React from 'react'
import { Button } from '@material-ui/core'

export default ({ disabled, text = 'Finalizar', ...props }) => (
  <Button
    variant="contained"
    color="primary"
    type="submit"
    disabled={disabled}
    {...props}
  >
    {text}
  </Button>
)
