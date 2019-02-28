import { cardType } from './validations/creditCard'

const numberMaskTypes = {
  DINERS: '9999 999999 9999',
  AMEX: '9999 999999 99999',
}

export const numberMask = number =>
  numberMaskTypes[cardType(number)] || '9999 9999 9999 9999'

export const labels = {
  'en-US': {
    name: 'Name on Card',
    number: 'Credit Card Number',
    expiry: 'Expiry Date',
    cvc: 'CVC',
  },
  'pt-BR': {
    name: 'Nome impresso no cartão de crédito',
    number: 'Número do cartão de crédito',
    expiry: 'Data de expiração',
    cvc: 'Código de segurança',
  },
}
