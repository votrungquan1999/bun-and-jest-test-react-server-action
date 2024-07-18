import { mock } from 'bun:test'

const cache = (a: any) => a

mock.module('react', () => ({
  cache,
}))
