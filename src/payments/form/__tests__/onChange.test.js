import onChange from '../onChange'

it('setFieldValue if number bigger than 22 digits', () => {
  const event = {
    target: {
      getAttribute: () => 'number',
      value: '123',
    },
  }

  let props = {
    handleChange: jest.fn(),
    value: '12',
  }

  onChange(props)(event)

  expect(props.handleChange).toHaveBeenCalled()
})
