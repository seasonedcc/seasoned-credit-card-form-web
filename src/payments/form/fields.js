import { cardType } from './validations/creditCard'

const numberMaskTypes = {
  DINERS: '9999 999999 9999',
  AMEX: '9999 999999 99999',
}

const numberMask = number =>
  numberMaskTypes[cardType(number)] || '9999 9999 9999 9999'

const name = {
  label: 'Nome impresso no cartão de crédito',
  name: 'name',
  fullWidth: true,
  autoFocus: true,
}

const number = ({ values: { number } }) => {
  return {
    label: 'Número do cartão de crédito',
    name: 'number',
    mask: numberMask(number),
    fullWidth: true,
  }
}

const expiry = {
  label: 'Data de expiração',
  name: 'expiry',
  mask: '99/99',
  placeholder: 'MM/AA',
}

const cvc = {
  label: 'Código de segurança',
  name: 'cvc',
  mask: '9999',
  maskChar: '',
  placeholder: 'Ex: 123',
}

export default props => [name, number(props), expiry, cvc]
