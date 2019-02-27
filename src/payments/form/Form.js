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

export default class extends Component {
  constructor(props) {
    super(props)

    this.state = {
      focused: '',
    }

    this.onFocus = onFocus.bind(this)
  }

  commonProperties = ({
    touched,
    errors,
    handleChange,
    handleBlur,
    setFieldValue,
    onFocus,
  }) => ({
    touched,
    errors,
    handleChange,
    handleBlur,
    setFieldValue,
    onFocus,
  })

  renderFields() {
    return (
      <Grid container justify={'space-between'} style={{ margin: '30px 0' }}>
        {filter(fields(this.props)).map(element => {
          return (
            <Field
              key={element.name}
              type={element.type || 'text'}
              value={this.props.values[element.name]}
              {...element}
              {...this.commonProperties({
                onFocus: this.onFocus,
                ...this.props,
              })}
            />
          )
        })}
      </Grid>
    )
  }

  render() {
    const { error, submitting, values } = this.props
    const { buttonMessage, errors, language } = this.props
    const disabled = submitting || Object.entries(errors).length > 0
    const cardProps =
      language === 'pt-BR'
        ? {
            locale: { valid: 'valido até' },
            placeholders: { name: 'Seu nome' },
          }
        : {}

    return (
      <Form>
        <div>
          <Cards
            {...values}
            focused={this.state.focused}
            acceptedCards={this.props.acceptedCards}
            {...cardProps}
          />
        </div>
        {this.renderFields()}
        {error && <Error>{error}</Error>}
        {submitting && <Loading style={{ alignSelf: 'center' }} />}
        <Grid container justify="center">
          <Button text={buttonMessage} disabled={disabled} />
        </Grid>
      </Form>
    )
  }
}
