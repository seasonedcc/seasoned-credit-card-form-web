import { required, length } from 'redux-form-validators'
import {
  cardNumber,
  cardExpiry,
  cardBrand,
  errors,
} from './validations/validations'
import generateValidate from './generateValidate'
import { normalizeField } from './validations/creditCard'

const errorMessages = {
  required: 'is required',
  invalidExpiry: 'e.g.: MM/AA',
  invalidCvc: 'it must have 3 or 4 digits. E.g.: 123 or 1234',
  ...errors,
}

const createValidations = ({ acceptedCards = [] }) => ({
  name: [required()],
  number: [required(), cardNumber(), cardBrand({ acceptedCards })],
  expiry: [
    required(),
    length({ msg: errorMessages.invalidExpiry, min: 5, max: 5 }),
    cardExpiry(),
  ],
  cvc: [required(), length({ msg: errorMessages.invalidCvc, min: 3, max: 4 })],
})

const createTranslations = ({ language = 'en-US' }) =>
  language === 'pt-BR'
    ? {
        [errorMessages.required]: 'Campo obrigatório',
        [errorMessages.cardNumber]: 'Número inválido',
        [errorMessages.cardBrand]: 'Essa bandeira não é suportada',
        [errorMessages.expired]: 'Cartão vencido',
        [errorMessages.invalidExpiry]: 'Ex: MM/AA',
        [errorMessages.invalidCvc]: 'Ex: 123',
      }
    : {}

export default generateValidate(
  createValidations,
  createTranslations,
  normalizeField,
)
