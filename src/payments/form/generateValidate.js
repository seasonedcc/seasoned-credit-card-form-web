export default (
  createValidations,
  createTranslations,
  normalizeField,
) => props => values => {
  const errors = {}
  const validations = createValidations(props)
  const translations = createTranslations()

  for (let field in validations) {
    const value = normalizeField ? normalizeField(values[field]) : values[field]
    const errorsValue = validations[field]
      .map(validateField => {
        const message = validateField(value, values)
        return translations[message] || message
      })
      .find(x => x)

    if (errorsValue) errors[field] = errorsValue
  }

  return errors
}
