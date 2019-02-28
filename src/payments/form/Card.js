import React from 'react'
import Cards from 'react-credit-cards'

export default props => {
  const { values, focused, acceptedCards, language } = props
  let cardProps = { ...values, focused, acceptedCards }
  cardProps = Object.assign(
    cardProps,
    language === 'pt-BR'
      ? {
          locale: { valid: 'valido até' },
          placeholders: { name: 'Seu nome' },
        }
      : {},
  )
  return <Cards {...cardProps} />
}
