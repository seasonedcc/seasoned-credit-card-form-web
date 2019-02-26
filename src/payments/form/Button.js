import React, { Component } from 'react'
import { Button } from '@material-ui/core'

export default class extends Component {
  render() {
    const { creating, isSubmitting } = this.props

    return (
      <Button
        variant="contained"
        color="primary"
        type="submit"
        disabled={isSubmitting || creating}
      >
        Finalizar
      </Button>
    )
  }
}
