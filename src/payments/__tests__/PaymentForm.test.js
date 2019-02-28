import React from 'react'
import renderer from 'react-test-renderer'

import PaymentForm from '../PaymentForm'

jest.mock('formik', () => ({
  Formik: ({ render, ...props }) => (
    <div {...props}>Formik - {render(props)}</div>
  ),
}))

jest.mock('../form/FormContainer', () => props => (
  <div {...props}>FormContainer</div>
))

it('renders correctly', () => {
  const props = {
    onSubmit: jest.fn(),
    foo: 'bar',
    submitting: false,
  }
  const tree = renderer.create(<PaymentForm {...props} />)
  expect(tree.toJSON()).toMatchSnapshot()
})
