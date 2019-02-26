import { cardNumber, cardExpiry } from '../validations'

it('show invalid card message', () => {
  const error = cardNumber('123123')
  expect(error).toEqual('Número inválido')
})

it('show invalid card message', () => {
  const error = cardNumber()
  expect(error).toEqual('Número inválido')
})

it('show no error message', () => {
  const error = cardNumber('4012888888881881')
  expect(error).toBeUndefined()
})

it('show invalid expiry message', () => {
  const error = cardExpiry('10/96')
  expect(error).toEqual('Cartão vencido')
})

it('show invalid expiry message', () => {
  const error = cardExpiry('12')
  expect(error).toEqual('Cartão vencido')
})

it('show invalid expiry message', () => {
  const error = cardExpiry()
  expect(error).toEqual('Cartão vencido')
})

it('show no error message', () => {
  const error = cardExpiry('10/2029')
  expect(error).toBeUndefined()
})
