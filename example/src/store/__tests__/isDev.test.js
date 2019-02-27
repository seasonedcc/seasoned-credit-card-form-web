import isDev from '../isDev'

afterEach(() => {
  process.env.NODE_ENV = 'test'
})

it('returns true when env is development', () => {
  process.env.NODE_ENV = 'development'
  expect(isDev()).toEqual(true)
})

it('returns false when env is production', () => {
  process.env.NODE_ENV = 'production'
  expect(isDev()).toEqual(false)
})

it('returns false when env is test', () => {
  process.env.NODE_ENV = 'test'
  expect(isDev()).toEqual(false)
})
