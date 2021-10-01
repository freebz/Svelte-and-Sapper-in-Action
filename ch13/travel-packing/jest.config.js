// Listing 12.2 Jest configuration in jest.config.js

module.exports = {
  bail: false,
  moduleFileExtensions: ['js', 'svelte'],
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.js$': 'babel-jest',
    '^.+\\.svelte$': 'svelte-jester'
  },
  verbose: true
};
