import React from 'react'
import renderer from 'react-test-renderer'

import render from '../render'

jest.mock('../Field', () => props => <div {...props}>Field</div>)

jest.mock('formik', () => ({
  Form: props => <div {...props}>Form</div>,
  Field: props => <div {...props}>Field</div>,
}))

const values = {
  name: '',
  number: '',
  expiry: '',
  cvc: '',
}

const formikProps = {
  values,
  handleChange: jest.fn(),
  errors: {},
  touched: {},
}

const props = {}

it('renders correctly', () => {
  const Form = render(props)
  const tree = renderer.create(<Form {...formikProps} />).toJSON()
  expect(tree).toMatchSnapshot()
})
