const nextJest = require('next/jest');

const createJestConfig = nextJest({dir: './'});

const customJestConfig = {
  testEnvironment: 'jest-environment-jsdom',
  modulePathIgnorePatterns: ['node_modules', 'archive'],
};

module.exports = createJestConfig(customJestConfig);