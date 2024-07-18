import { expect, test, mock } from 'bun:test'
import { main, main2 } from './module'

test('before', async () => {
  expect(main()).toBe(1)
  expect(main2()).toBe(2)
})

test('after', async () => {
  const mockDependency = () => 'mocked'
  mock.module('./module.ts', () => ({ main: mockDependency }))
  expect(main()).toBe('mocked')
  expect(main2()).toBe(2)
})
