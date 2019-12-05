module.exports = {
  rootDir: '.',
  displayName: { name: 'enzyme-setup', color: 'blue' },
  runner: 'jest-runner', // default
  verbose: true,
  errorOnDeprecated: true,
  roots: ['./Tests'], // directories
  moduleFileExtensions: ['js', 'jsx'],
  setupFilesAfterEnv: ['<rootDir>Tests/setupTest.js'],
};
