import React from 'react'
import { Button } from '@material-ui/core'

export default ({ disabled, style, text = 'Finalizar' }) => (
  <Button
    variant="contained"
    color="primary"
    type="submit"
    disabled={disabled}
    style={style}
  >
    {text}
  </Button>
)
