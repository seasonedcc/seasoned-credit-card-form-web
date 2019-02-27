import React from 'react'
import renderer from 'react-test-renderer'
import Field from '../Field'

jest.mock('react-media', () => props => <div>{props.children}</div>)
jest.mock('formik', () => ({
  Field: props => <div {...props}>Field</div>,
}))

it('renders correctly without errors', () => {
  const tree = renderer.create(<Field />).toJSON()
  expect(tree).toMatchSnapshot()
})

it('renders correctly with errors', () => {
  const props = {
    name: 'abc',
    touched: {
      abc: 'X',
    },
    errors: {
      abc: 'Y',
    },
  }

  const tree = renderer.create(<Field {...props} />).toJSON()
  expect(tree).toMatchSnapshot()
})
