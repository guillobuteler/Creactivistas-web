const nextJest = require('next/jest');

const createJestConfig = nextJest({dir: './'});

const customJestConfig = {
  testEnvironment: 'jest-environment-jsdom',
  modulePathIgnorePatterns: ['node_modules', 'archive'],
  collectCoverageFrom: [
    'src/app/actus/**/*.{ts,tsx}',
    // 'src/components/**/*.{ts,tsx}', these are just presentation wrappers for the most part
  ]
};

module.exports = createJestConfig(customJestConfig);