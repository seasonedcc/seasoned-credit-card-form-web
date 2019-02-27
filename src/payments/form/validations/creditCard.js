import find from 'lodash/find'
import luhn from 'luhn'

export const cardType = (number, strict = false) => {
  const cardNumber = normalizeField(number)

  return (
    find(brands, brand => brand[strict ? 'strict' : 'loose'](cardNumber)) || {
      type: null,
    }
  ).type
}

export const validCardNumber = number => {
  const type = cardType(number, true)

  if (!type) {
    return false
  }

  if (type === 'HIPERCARD') {
    // There's no validation for hipercard.
    return true
  }

  return luhn.validate(normalizeField(number))
}

export const acceptBrand = brands => number => {
  return brands && brands.length > 0
    ? brands.map(b => b.toUpperCase()).includes(cardType(number, true))
    : true
}

const validMonth = month => month > 0 && month < 13

const longYear = year => {
  const prefix = year > 80 ? '19' : '20'
  return parseInt(prefix + year, 10)
}

const cardYear = yearString => {
  let year = parseInt(yearString, 10)
  const { length } = year.toString()

  if (length !== 2 && length !== 4) {
    return null
  }

  if (length === 2) {
    year = longYear(year)
  }

  return year
}

export const validCardExpiry = (monthString, yearString) => {
  const month = parseInt(monthString, 10)
  const year = cardYear(yearString)

  return yearString
    ? validMonth(month) && year && !expiredCard(month, year)
    : false
}

const expiredCard = (month, year) => {
  const now = new Date()
  const thisMonth = ('0' + (now.getMonth() + 1)).slice(-2)
  const thisYear = now.getFullYear()
  const cardMonth = ('0' + month).slice(-2)

  var currentDate = thisYear + thisMonth
  var cardDate = year + cardMonth

  return parseInt(cardDate, 10) < parseInt(currentDate, 10)
}

export const normalizeField = number => {
  const stringNumber = number + ''
  // eslint-disable-next-line no-useless-escape
  return (stringNumber || '').replace(/[\s+|\.|\-|\_]/g, '')
}

const eloBins = [
  '50670',
  '50671',
  '50672',
  '50673',
  '50674',
  '50675',
  '50676',
  '50900',
  '50901',
  '50902',
  '50903',
  '50904',
  '50905',
  '50906',
  '50907',
  '401178',
  '401179',
  '431274',
  '438935',
  '451416',
  '457393',
  '457631',
  '457632',
  '504175',
  '506699',
  '506770',
  '506771',
  '506772',
  '506773',
  '506774',
  '506775',
  '506776',
  '506777',
  '506778',
  '509080',
  '509081',
  '509082',
  '509083',
  '627780',
  '636297',
]

const eloMatch = number =>
  eloBins.indexOf(number.substring(0, 6)) > -1 ||
  eloBins.indexOf(number.substring(0, 5)) > -1

const eloStrictMatch = number => {
  if (number === null || number.length !== 16) {
    return false
  }
  return eloMatch(number)
}

const eloLooseMatch = number => {
  if (number === null || number.length < 6) {
    return false
  }
  return eloMatch(number)
}

const brands = [
  { type: 'ELO', strict: eloStrictMatch, loose: eloLooseMatch },
  {
    type: 'VISA',
    strict: number => /^4\d{15}$/.test(number),
    loose: number => /^4\d{3}\d*$/.test(number),
  },
  {
    type: 'MASTERCARD',
    strict: number => /^5[1-5]\d{14}$/.test(number),
    loose: number => /^5[1-5]\d{4}\d*$/.test(number),
  },
  {
    type: 'AMEX',
    strict: number => /^3[4,7]\d{13}$/.test(number),
    loose: number => /^3[4,7]\d{2}\d*$/.test(number),
  },
  {
    type: 'DINERS',
    strict: number => /^3[0,6,8]\d{12}$/.test(number),
    loose: number => /^3(?:0[0-5]|[68][0-9])+\d*$/.test(number),
  },
  {
    type: 'HIPERCARD',
    strict: number => /^(606282\d{10}(\d{3})?)|(3841\d{15})$/.test(number),
    loose: number => /^(606282|3841\d{2})\d*$/.test(number),
  },
]
