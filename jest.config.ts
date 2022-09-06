import nextJest from 'next/jest';

const createJestConfig = nextJest({
  dir: "./",
});

const customJestConfig = {
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
  moduleNameMapper: {
    "@/mui/styled-engine": "<rootDir>/node_modules/@mui/styled-engine",
    "^@/components/(.*)$": "<rootDir>/src/components/$1",
    "^@/pages/(.*)$": "<rootDir>/src/pages/$1",
    "@/store/(.*)$": "<rootDir>/src/store/$1",
    "@/api/(.*)$": "<rootDir>/src/api/$1",
    "@/styles/(.*)$": "<rootDir>/src/styles/$1",
    "@/utils/(.*)$": "<rootDir>/src/utils/$1",
    "@/constants": "<rootDir>/src/constants.ts",
    "@/hooks": "<rootDir>/src/hooks.ts",
  },
  testEnvironment: "jest-environment-jsdom",
};

module.exports = createJestConfig(customJestConfig);
