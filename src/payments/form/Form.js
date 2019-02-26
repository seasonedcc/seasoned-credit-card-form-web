import React, { Component } from 'react'
import filter from 'lodash/filter'
import { Form } from 'formik'
import Grid from '@material-ui/core/Grid'
import Cards from 'react-credit-cards'

import Error from '../../Error'
import Loading from '../../Loading'
import Button from './Button'
import Field from './Field'
import fields from './fields'
import onFocus from './onFocus'

export default (class extends Component {
  constructor(props) {
    super(props)

    this.state = {
      focused: '',
    }

    this.onFocus = onFocus.bind(this)
  }

  commonProperties() {
    return {
      handleChange: this.props.handleChange,
      handleBlur: this.props.handleBlur,
      setFieldValue: this.props.setFieldValue,
      onFocus: target => this.onFocus(target),
    }
  }

  renderFields() {
    return (
      <Grid container justify={'space-between'} style={{ margin: '30px 0' }}>
        {filter(fields(this.props)).map(element => (
          <Field
            key={element.name}
            touched={this.props.touched}
            errors={this.props.errors}
            type={element.type || 'text'}
            value={this.props.values[element.name]}
            {...element}
            {...this.commonProperties()}
          />
        ))}
      </Grid>
    )
  }

  render() {
    const { error, submitting } = this.props

    return (
      <Form>
        <div>
          <Cards
            number={this.props.values.number}
            name={this.props.values.name}
            expiry={this.props.values.expiry}
            cvc={this.props.values.cvc}
            focused={this.state.focused}
            placeholders={{ name: 'Seu nome' }}
          />
        </div>
        {this.renderFields()}
        {error && <Error>{error}</Error>}
        {submitting && <Loading style={{ alignSelf: 'center' }} />}
        <Button disabled={submitting} />
      </Form>
    )
  }
})
