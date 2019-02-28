import { numberMask, labels } from '../fieldsHelper'

jest.mock('../validations/creditCard', () => ({
  cardType: jest
    .fn(() => 'default')
    .mockImplementationOnce(() => 'DINERS')
    .mockImplementationOnce(() => 'AMEX')
    .mockImplementationOnce(() => 'MASTERCARD'),
}))

it('returns the correct mask', () => {
  expect(numberMask(1)).toEqual('9999 999999 9999')
  expect(numberMask(2)).toEqual('9999 999999 99999')
  expect(numberMask(3)).toEqual('9999 9999 9999 9999')
})

describe('with pt-BR as language', () => {
  const language = 'pt-BR'
  it('returns correct labels correctly', () => {
    expect(labels[language]).toMatchObject({
      name: 'Nome impresso no cartão de crédito',
      number: 'Número do cartão de crédito',
      expiry: 'Data de expiração',
      cvc: 'Código de segurança',
    })
  })
})

describe('with en-US as language', () => {
  const language = 'en-US'
  it('returns correct labels correctly', () => {
    expect(labels[language]).toMatchObject({
      name: 'Name on Card',
      number: 'Credit Card Number',
      expiry: 'Expiry Date',
      cvc: 'CVC',
    })
  })
})
