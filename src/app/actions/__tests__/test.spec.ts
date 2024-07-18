import { expect, test } from 'bun:test'

import testAction from '../testAction'

test('test', async () => {
  const result = await testAction()

  expect(result).toBe('test')
})
