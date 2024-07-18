import nextJest from 'next/jest.js'

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: './',
})

// Sync object
/** @type {import('@jest/types').Config.InitialOptions} */
const config = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  verbose: true,
  testPathIgnorePatterns: ['<rootDir>/node_modules', '<rootDir>/.history', '<rootDir>/dist', '<rootDir>/src/app'],
  // testNamePattern: 'jest-test',
  transform: {
    '^.+.(t|j)sx?$': 'ts-jest',
  },
  // transform: {
  //   "^.+\\.ts?$": "ts-jest",
  // },
  // transform: {
  //   "node_modules/@jerni/.+\\.(j|t)s?$": "ts-jest",
  //   "\\.[jt]sx?$": "ts-jest",
  // },
  transformIgnorePatterns: [`node_modules/(?!(mongodb))`, 'node_modules/(?!(@jerni)/)'],
  moduleDirectories: ['node_modules', 'src'],
  modulePathIgnorePatterns: ['<rootDir>/dist'],
  moduleNameMapper: {
    '^src/(.*)$': '<rootDir>/src/$1',
  },
}

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
export default createJestConfig(config)
