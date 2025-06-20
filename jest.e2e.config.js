module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testMatch: ['**/?(*.)+(e2e.spec).ts'],
  testPathIgnorePatterns: ['/node_modules/', '/dist/'],
};
