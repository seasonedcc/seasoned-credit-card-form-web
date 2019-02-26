import { validCardNumber, validCardExpiry } from './creditCard'

export const cardNumber = value =>
  validCardNumber(value) ? undefined : 'Número inválido'

export const cardExpiry = value => {
  if (!value) {
    return 'Cartão vencido'
  }

  const [month, year] = value.split('/')
  return validCardExpiry(month, year) ? undefined : 'Cartão vencido'
}
