import onBlur from '../onBlur'

it('call onBlur', () => {
  const event = {
    target: {
      name: '123',
    },
  }

  let props = {
    handleBlur: jest.fn(),
  }

  onBlur(props)(event)

  expect(props.handleBlur).toHaveBeenCalled()
  expect(event.target.name).toEqual('123')
})
