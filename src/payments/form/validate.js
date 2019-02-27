import { required, length } from 'redux-form-validators'
import { cardNumber, cardExpiry, cardBrand } from './validations/validations'
import generateValidate from './generateValidate'
import { normalizeField } from './validations/creditCard'

const createValidations = ({ acceptedCards }) => ({
  name: [required()],
  number: [required(), cardNumber, cardBrand(acceptedCards)],
  expiry: [required(), length({ min: 5, max: 5 }), cardExpiry],
  cvc: [required(), length({ min: 3, max: 4 })],
  value: [required()],
})

const createTranslations = () => ({
  'must be greater than 0': 'Deve ser maior que zero',
  'is required': 'Campo obrigatório',
  'is not a number': 'Não é um número válido',
  'is too short (minimum is 5 characters)': 'Ex: MM/AA',
  'is too short (minimum is 3 characters)': 'Ex: 123',
})

export default generateValidate(
  createValidations,
  createTranslations,
  normalizeField,
)
