import { addValidator } from 'redux-form-validators'

import { validCardNumber, acceptBrand, validCardExpiry } from './creditCard'

export const errors = {
  cardNumber: 'invalid number',
  cardBrand: 'your card is not supported',
  expired: 'your card is expired',
}

export const cardNumber = addValidator({
  defaultMessage: errors.cardNumber,
  validator: (_, value) => validCardNumber(value),
})

export const cardBrand = addValidator({
  defaultMessage: errors.cardBrand,
  validator: ({ acceptedCards }, value) => acceptBrand(acceptedCards)(value),
})

export const cardExpiry = addValidator({
  defaultMessage: errors.expired,
  validator: (_, value) => {
    if (!value) {
      return false
    }
    const [month, year] = value.split('/')
    return validCardExpiry(month, year)
  },
})
