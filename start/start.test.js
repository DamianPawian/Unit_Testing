const testFunction = require('./code');

test('check if greets the world properly', () => {
  expect(testFunction()).toBe("Hello World");
});