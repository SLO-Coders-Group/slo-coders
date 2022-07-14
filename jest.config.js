const nextJest = require("next/jest");

const createJestConfig = nextJest({
  dir: "./",
});

const customJestConfig = {
  // Add more setup options before each test is run
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  // if using TypeScript with a baseUrl set to the root directory then you need the below for alias' to work
  moduleDirectories: ["<rootDir>/"],
  testEnvironment: "jest-environment-jsdom",
  collectCoverage: true,
  collectCoverageFrom: [
    "src/**",
    "!src/types/**",
    "!*.test.*",
    "!src/utils/test/test.utils.tsx",
  ],
  coverageReporters: ["lcov", "text"],
  coverageThreshold: {
    global: {
      branches: 19, // Only lower coverage threshold if necessary
      functions: 10, // Only lower coverage threshold if necessary
      lines: 15, // Only lower coverage threshold if necessary
      statements: 15, // Only lower coverage threshold if necessary
    },
  },
};

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
module.exports = createJestConfig(customJestConfig);
