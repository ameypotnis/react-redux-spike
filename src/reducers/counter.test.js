import counter from './counter'

it('should provide the initial state', () => {
  expect(counter(undefined, {})).toBe(0)
  expect(counter(0, {type: 'INCREMENT'})).toBe(1)
  expect(counter(1, {type: 'DECREMENT'})).toBe(0)
})
