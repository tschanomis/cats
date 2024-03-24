import type { Config } from "@jest/types";

const config: Config.InitialOptions = {
  testMatch: ["**/*.jest.test.ts"],
  transform: {
    "^.+\\.tsx?$": "ts-jest",
  },
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  testPathIgnorePatterns: ["/node_modules/", "/dist/"],
};

export default config;
