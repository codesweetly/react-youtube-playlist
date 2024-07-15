import type { Config } from "jest";

const config: Config = {
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["<rootDir>/src/jestIntersectionObserverMock.ts"],
  transform: {
    "^.+\\.tsx?$": "ts-jest",
  },
};

export default config;
