export const collectCoverageFrom = [
  'app/**/*.{js,jsx}',
  '!app/**/*.test.{js,jsx}',
  '!app/*/RbGenerated*/*.{js,jsx}',
  '!app/app.js',
  '!app/*/*/Loadable.{js,jsx}'
];
export const coverageThreshold = {
  global: {
    statements: 98,
    branches: 91,
    functions: 98,
    lines: 98
  }
};
export const coverageReporters = ['json', 'lcov', 'text-summary'];
export const moduleDirectories = ['node_modules', 'app'];
export const moduleNameMapper = {
  '.*\\.(css|less|styl|scss|sass)$': '<rootDir>/config/jest-mocks/cssModule.js',
  '.*\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/config/jest-mocks/image.js'
};
export const setupTestFrameworkScriptFile = '<rootDir>/config/test-setup.js';
export const testRegex = 'tests/.*\\.test\\.js$';
