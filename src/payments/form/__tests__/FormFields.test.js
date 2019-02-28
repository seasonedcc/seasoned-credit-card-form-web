import React from 'react'
import renderer from 'react-test-renderer'

import FormFields from '../FormFields'

jest.mock('../Field', () => props => <div {...props}>Field - {props.name}</div>)
jest.mock('../fieldsHelper', () => ({
  labels: {
    'pt-BR': {},
    'en-US': {},
  },
  numberMask: value => value,
}))

it('renders correctly', () => {
  const props = {
    values: {
      name: '',
      number: '',
      cvc: '',
      expiry: '',
    },
    language: 'pt-BR',
    foo: 'bar',
  }
  const tree = renderer.create(<FormFields {...props} />).toJSON()
  expect(tree).toMatchSnapshot()
})
