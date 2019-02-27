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

const props = {
  id: 1,
  token: 'abababa',
  channel: 'whatsapp',
  text: 'paga nois',
  list: [],
  offer: {
    consumer: {
      fullName: 'foo',
    },
    discount: 50,
    valueToPay: 200,
    originalValue: 250,
    valueWithInterest: 350,
    contractNumber: '123',
  },
}

it('renders correctly', () => {
  const Form = render(props)
  const tree = renderer.create(<Form values={values} />).toJSON()
  expect(tree).toMatchSnapshot()
})
