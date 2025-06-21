module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testMatch: ['**/?(*.)+(spec).ts'],
  testPathIgnorePatterns: ['/node_modules/', '/dist/', '/integration/'],
  moduleNameMapper: {
    '^@agenda/(.*)$': '<rootDir>/src/agenda/$1',
    '^@agendamento/(.*)$': '<rootDir>/src/agendamento/$1',
    '^@core/(.*)$': '<rootDir>/src/core/$1',
    '^@utils/(.*)$': '<rootDir>/src/utils/$1',
  },
};
