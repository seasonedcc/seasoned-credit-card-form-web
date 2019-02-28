import React from 'react'
import renderer from 'react-test-renderer'

import Card from '../Card'

jest.mock('react-credit-cards', () => props => <div {...props}> Cards </div>)

const props = {
  values: {},
  focused: '',
  acceptedCards: ['visa'],
}

describe('with en-US as language', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Card {...props} language={'en-US'} />)
    expect(tree).toMatchSnapshot()
  })
})

describe('with pt-BR as language', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Card {...props} language={'pt-BR'} />)
    expect(tree).toMatchSnapshot()
  })
})
