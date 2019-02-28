import React from 'react'
import renderer from 'react-test-renderer'

import FormContainer from '../FormContainer'

jest.mock('../Form', () => props => <div {...props}>Presentational form</div>)

const tree = renderer.create(<FormContainer foo={'bar'} />)

it('renders correctly', () => {
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
