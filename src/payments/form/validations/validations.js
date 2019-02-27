import { validCardNumber, acceptBrand, validCardExpiry } from './creditCard'

export const cardNumber = value =>
  validCardNumber(value) ? undefined : 'Número inválido'

export const cardBrand = acceptedBrands => value =>
  acceptBrand(acceptedBrands)(value) ? undefined : 'Bandeira não aceita'

export const cardExpiry = value => {
  if (!value) {
    return 'Cartão vencido'
  }

  const [month, year] = value.split('/')
  return validCardExpiry(month, year) ? undefined : 'Cartão vencido'
}
