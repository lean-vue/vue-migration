module.exports = {
  testEnvironment: "jsdom",
  testMatch: [
    "**/__tests__/**/*.[jt]s?(x)",
    "**/?(*.)+(spec|test).[jt]s?(x)",
    "!**/tests/e2e/**",
  ],
  moduleFileExtensions: ["js", "json", "vue"],
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1",
  },
  transform: {
    "^[^.]+.vue$": "@vue/vue2-jest",
    ".*\\.(js)$": "babel-jest",
  },
};
