import { cardNumber, cardExpiry, cardBrand } from '../validations'

it('show invalid card message', () => {
  const error = cardNumber()('123123')
  expect(error).toEqual('invalid number')
})

it('show invalid card message', () => {
  const error = cardNumber()('')
  expect(error).toEqual('invalid number')
})

it('show no error message', () => {
  const error = cardNumber()('4012888888881881')
  expect(error).toBeUndefined()
})

it('show invalid expiry message', () => {
  const error = cardExpiry()('10/96')
  expect(error).toEqual('your card is expired')
})

it('show invalid expiry message', () => {
  const error = cardExpiry()('12')
  expect(error).toEqual('your card is expired')
})

it('show invalid expiry message', () => {
  const error = cardExpiry()('')
  expect(error).toEqual('your card is expired')
})

it('show no error message', () => {
  const error = cardExpiry()('10/2029')
  expect(error).toBeUndefined()
})

it('show no error message about brand', () => {
  const error = cardBrand()('5555444433331111')
  expect(error).toBeUndefined()
})

it('show brand not accepted error', () => {
  const error = cardBrand({ acceptedCards: ['visa'] })('5555444433331111')
  expect(error).toEqual('your card is not supported')
})

it('does NOT show brand not accepted error', () => {
  const error = cardBrand({ acceptedCards: ['visa'] })('4242424242424242')
  expect(error).toBeUndefined()
})
