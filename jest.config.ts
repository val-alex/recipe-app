import nextJest from 'next/jest';

// @ts-ignore
const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: "./",
});

// Add any custom config to be passed to Jest
const customJestConfig = {
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
  moduleNameMapper: {
    // Handle module aliases (this will be automatically configured for you soon)
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

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
module.exports = createJestConfig(customJestConfig);
