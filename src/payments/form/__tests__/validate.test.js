import validate from '../validate'

describe('Without setting language (en-US)', () => {
  const props = {}

  it('show errors of fields required', () => {
    const values = {
      name: '',
      number: '',
      cvc: '',
      expiry: '',
    }

    const errors = validate(props)(values)

    expect(errors.name).toEqual('is required')
    expect(errors.number).toEqual('is required')
    expect(errors.cvc).toEqual('is required')
    expect(errors.expiry).toEqual('is required')
  })

  it('show error if length is not correct', () => {
    const values = {
      name: '',
      number: '123',
      cvc: '2',
      expiry: '12',
    }

    const errors = validate(props)(values)

    expect(errors.number).toEqual('invalid number')
    expect(errors.cvc).toEqual('it must have 3 or 4 digits. E.g.: 123 or 1234')
    expect(errors.expiry).toEqual('e.g.: MM/AA')
  })

  it('show error if expiry is expired', () => {
    const values = {
      expiry: '12/17',
    }

    const errors = validate(props)(values)

    expect(errors.expiry).toEqual('your card is expired')
  })

  it('show error if number is invalid', () => {
    const values = {
      number: '123123123123123123',
    }

    const errors = validate(props)(values)

    expect(errors.number).toEqual('invalid number')
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

    expect(errors.number).toEqual('your card is not supported')
  })
})

describe('With language pt-BR', () => {
  const props = {
    language: 'pt-BR',
  }

  it('show errors of fields required', () => {
    const values = {
      name: '',
    }

    const errors = validate(props)(values)

    expect(errors.name).toEqual('Campo obrigatório')
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

    const errors = validate({ acceptedCards: ['hipercard'], ...props })(values)

    expect(errors.number).toBeUndefined()
  })

  it('get errors when a hipercard number enters and hipercard is not accepted', () => {
    const values = {
      number: '6062826786276634',
    }

    const errors = validate({ acceptedCards: ['visa'], ...props })(values)

    expect(errors.number).toEqual('Essa bandeira não é suportada')
  })
})
