module.exports = {
  moduleFileExtensions: ['ts', 'tsx', 'js'],
  rootDir: 'src',
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
  globals: {
    'ts-jest': {
      tsConfig: 'tsconfig.json',
    },
  },
  testMatch: ['**/__tests__/*.+(ts|tsx|js)'],
  testEnvironment: 'node',
};
