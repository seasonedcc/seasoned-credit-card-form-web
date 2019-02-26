import React from 'react'
import renderer from 'react-test-renderer'

import Form from '../Form'

jest.mock('../Field', () => props => <div {...props}>Field</div>)

jest.mock('formik', () => ({
  Form: props => <div {...props}>{props.children}</div>,
  Field: props => <div {...props}>{props.children}</div>,
}))

const values = {
  name: '',
  number: '',
  expiry: '',
  cvc: '',
}

const props = {
  handleChange: jest.fn(),
  errors: {},
  touched: {},
}

const tree = renderer.create(<Form {...props} values={values} />)
it('renders correctly with one card', () => {
  expect(tree.toJSON()).toMatchSnapshot()
})

it('constructor puts focused as a state property', () => {
  expect(tree.getInstance().state).toHaveProperty('focused')
})

it('binded onFocus change his state', () => {
  const target = { id: 'powpow' }
  let instance = tree.getInstance()
  expect(instance.state.focused).toEqual('')
  instance.onFocus({ target })
  expect(instance.state.focused).toEqual(target.id)
})
