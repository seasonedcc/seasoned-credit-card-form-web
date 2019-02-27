import validate from '../validate'

const props = {
  offer: { valueToPay: 1000.45 },
  total: 450.2,
}

it('show errors of fields required', () => {
  const values = {
    name: '',
    number: '',
    cvc: '',
    expiry: '',
  }

  const errors = validate(props)(values)

  expect(errors.name).toEqual('Campo obrigatório')
  expect(errors.number).toEqual('Campo obrigatório')
  expect(errors.cvc).toEqual('Campo obrigatório')
  expect(errors.expiry).toEqual('Campo obrigatório')
})

it('show error if length is not correct', () => {
  const values = {
    name: '',
    number: '123',
    cvc: '2',
    expiry: '12',
  }

  const errors = validate(props)(values)

  expect(errors.number).toEqual('Número inválido')
  expect(errors.cvc).toEqual('Ex: 123')
  expect(errors.expiry).toEqual('Ex: MM/AA')
})

it('show error if expiry is expired', () => {
  const values = {
    expiry: '12/17',
  }

  const errors = validate(props)(values)

  expect(errors.expiry).toEqual('Cartão vencido')
})

it('show error if number is invalid', () => {
  const values = {
    number: '123123123123123123',
  }

  const errors = validate(props)(values)

  expect(errors.number).toEqual('Número inválido')
})

it('all valid master', () => {
  const values = {
    name: 'test test',
    number: '5555555555554444',
    cvc: '123',
    expiry: '12/30',
  }

  const errors = validate(props)(values)

  expect(errors.name).toBeUndefined()
  expect(errors.number).toBeUndefined()
  expect(errors.cvc).toBeUndefined()
  expect(errors.expiry).toBeUndefined()
})

it('test hipercard number', () => {
  const values = {
    number: '6062826786276634',
  }

  const errors = validate(props)(values)

  expect(errors.number).toBeUndefined()
})

it('validate a hipercard number when hipercard its accepted', () => {
  const values = {
    number: '6062826786276634',
  }

  const errors = validate({ acceptedCards: ['hipercard'] })(values)

  expect(errors.number).toBeUndefined()
})

it('get errors when a hipercard number enters and hipercard is not accepted', () => {
  const values = {
    number: '6062826786276634',
  }

  const errors = validate({ acceptedCards: ['visa'] })(values)

  expect(errors.number).toEqual('Bandeira não aceita')
})
