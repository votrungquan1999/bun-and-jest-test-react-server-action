import testAction from './app/actions/testAction'

test('test', async () => {
  const result = await testAction()

  expect(result).toBe('test')
})
