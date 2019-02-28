import React from 'react'
import renderer from 'react-test-renderer'

import Form from '../Form'

jest.mock('../FormFields', () => props => <div {...props}>Form Fields</div>)
jest.mock('../Button', () => props => <div {...props}>Button</div>)
jest.mock('../Card', () => props => <div {...props}>Card</div>)

describe('Before submit', () => {
  it('renders correctly before fill form', () => {
    const props = {
      submitting: false,
      buttonMessage: 'Pay',
      error: undefined,
      errors: {},
    }
    const tree = renderer.create(<Form {...props} />)
    expect(tree.toJSON()).toMatchSnapshot()
  })

  it('renders button disabled when there are validation errors', () => {
    const props = {
      submitting: false,
      buttonMessage: 'Pay',
      error: undefined,
      errors: { number: 'number invalid' },
    }
    const tree = renderer.create(<Form {...props} />)
    const { disabled } = tree.root.findByProps({ text: 'Pay' }).props
    expect(disabled).toBeTruthy()
  })
})

describe('After submit', () => {
  it('renders correctly while loading', () => {
    const props = {
      submitting: true,
      buttonMessage: 'Pay',
      error: undefined,
      errors: {},
    }

    const tree = renderer.create(<Form {...props} />)
    expect(tree.toJSON()).toMatchSnapshot()
  })

  it('renders correctly when occurs a server error', () => {
    const props = {
      submitting: false,
      buttonMessage: 'Pay',
      error: 'submit failed',
      errors: {},
    }
    const tree = renderer.create(<Form {...props} />)
    expect(tree.toJSON()).toMatchSnapshot()
  })
})
