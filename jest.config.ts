import type { Config } from '@jest/types';

const customJestConfig: Config.InitialOptions = {
  preset: 'ts-jest',
  // We want to clear mocks and instances between every st
  clearMocks: true,
  /**
   * List of paths to modules that run some code to configure or
   * set up the testing framework before each test
   */
  setupFilesAfterEnv: ['<rootDir>/src/jest.setup.ts'],
  // The test environment that will be used for testing
  testEnvironment: 'jsdom',
  // A map from regular expressions to paths to transformers
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': 'ts-jest',
  },
  watchPlugins: [
    'jest-watch-typeahead/filename',
    'jest-watch-typeahead/testname',
  ],
  moduleNameMapper: {
    '^@application/(.*)$': '<rootDir>/src/application/$1',
    '^@domain/(.*)$': '<rootDir>/src/domain/$1',
    '^@infrastructure/(.*)$': '<rootDir>/src/infrastructure/$1',
    '^@presentation/(.*)$': '<rootDir>/src/presentation/$1',
  },
  collectCoverage: true,
  collectCoverageFrom: [
    'src/**/*.{js,jsx,ts,tsx}',
    '!src/**/*.d.ts',
    '!src/**/*.utils.tsx',
  ],
  coverageThreshold: {
    global: {
      lines: 90,
    },
  },
};

export default customJestConfig;
