import React, { Component } from 'react'

import Form from './Form'

export default class extends Component {
  state = {
    focused: '',
  }

  onFocus = ({ target: { id } }) => {
    this.setState({ focused: id })
  }

  render() {
    return (
      <Form
        {...this.props}
        focused={this.state.focused}
        onFocus={this.onFocus}
      />
    )
  }
}
