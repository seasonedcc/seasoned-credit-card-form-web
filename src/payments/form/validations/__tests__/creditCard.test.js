import { cardType, acceptBrand } from '../creditCard'

it('return null if number is less than 6 digits', () => {
  const type = cardType('63629')
  expect(type).toEqual(null)
})

it('show ELO', () => {
  const type = cardType('6362970000457013')
  expect(type).toEqual('ELO')
})

it('show VISA', () => {
  const type = cardType('4539 0033 7072 5497')
  expect(type).toEqual('VISA')
})

it('show MASTERCARD', () => {
  const type = cardType('5356 0663 2027 1893')
  expect(type).toEqual('MASTERCARD')
})

it('show AMEX', () => {
  const type = cardType('378282246310005')
  expect(type).toEqual('AMEX')
})

it('show DINERS', () => {
  const type = cardType('30569309025904')
  expect(type).toEqual('DINERS')
})

it('show HIPERCARD', () => {
  const type = cardType('6062825624254001')
  expect(type).toEqual('HIPERCARD')
})

describe('validates if the card type is accepted', () => {
  it('returns true', () => {
    const accepted = acceptBrand(['visa'])('4242424242424242')
    expect(accepted).toBeTruthy()
  })

  it('returns false when just visa is accepted and enters a hipercard number ', () => {
    const accepted = acceptBrand(['visa'])('6062825624254001')
    expect(accepted).toBeFalsy()
  })
})
