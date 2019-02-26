import React, { Component } from 'react'
import { Button } from '@material-ui/core'

export default class extends Component {
  render() {
    const { disabled } = this.props

    return (
      <Button
        variant="contained"
        color="primary"
        type="submit"
        disabled={disabled}
      >
        Finalizar
      </Button>
    )
  }
}
