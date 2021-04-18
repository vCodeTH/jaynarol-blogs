module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  collectCoverageFrom: [
    '**/*.{ts,tsx}',
    '!**/node_modules/**',
    '!**/.storybook/**',
    '!**/tests/**',
    '!**/__test__/**',
    '!**/coverage/**',
    '!next-env.d.ts',
  ],
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100,
    },
  },
  testPathIgnorePatterns: [
    '/.next/',
    '/node_modules/',
    '/lib/',
    '/tests/',
    '/coverage/',
    '/.storybook/',
  ],
  testRegex: '(/__test__/.*|\\.(test|spec))\\.(ts|tsx|js)|test.(ts|tsx|js)$',
  testURL: 'http://localhost',
  moduleFileExtensions: ['ts', 'js', 'json'],
  moduleNameMapper: {
    '\\.(css|less)$': '<rootDir>/__mocks__/styleMock.js',
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/__mocks__/fileMock.js',
  },
  transform: {
    '.(ts|tsx)': 'ts-jest',
  },
  transformIgnorePatterns: ['<rootDir>/node_modules/'],
}
