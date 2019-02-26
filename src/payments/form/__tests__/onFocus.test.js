import onFocus from '../onFocus'

it('calls onFocus', () => {
  const focusHandler = jest.fn()
  const context = {
    setState: focusHandler,
  }
  onFocus.bind(context)({ target: { id: 'name' } })
  expect(focusHandler).toBeCalledWith({ focused: 'name' })
})
