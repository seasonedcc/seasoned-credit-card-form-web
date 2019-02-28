import React from 'react'
import renderer from 'react-test-renderer'

import Button from '../Button'

it('renders correctly', () => {
  const props = { disabled: false }
  const tree = renderer.create(<Button {...props} />).toJSON()
  expect(tree).toMatchSnapshot()
})
