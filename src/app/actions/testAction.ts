import { cache, createContext } from 'react'
import { notFound } from 'next/navigation'

export default cache(async () => {
  // notFound()

  // console.log(createContext)

  // just log the function so that it's not removed by tree-shaking while running tests
  // not found is just an example of a function that is not usable while testing with bun
  console.log(notFound)

  return 'test'
})
