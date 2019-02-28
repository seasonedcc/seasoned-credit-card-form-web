import { cardType } from './validations/creditCard'

const numberMaskTypes = {
  DINERS: '9999 999999 9999',
  AMEX: '9999 999999 99999',
}

const numberMask = number =>
  numberMaskTypes[cardType(number)] || '9999 9999 9999 9999'

const labels = {
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

const name = language => ({
  label: labels[language].name,
  name: 'name',
  fullWidth: true,
  autoFocus: true,
})

const number = ({ values: { number }, language }) => {
  return {
    label: labels[language].number,
    name: 'number',
    mask: numberMask(number),
    fullWidth: true,
  }
}

const expiry = language => ({
  label: labels[language].expiry,
  name: 'expiry',
  mask: '99/99',
  placeholder: 'MM/AA',
})

const cvc = language => ({
  label: labels[language].cvc,
  name: 'cvc',
  mask: '9999',
  maskChar: '',
  placeholder: 'Ex: 123',
})

export default ({ language, ...props }) => [
  name(language),
  number({ language, ...props }),
  expiry(language),
  cvc(language),
]
