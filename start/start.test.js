const testFunction = require('./code');

test('check if greets the world properly', () => {
  expect(testFunction()).toBe("Hello World");
});


test('check if greets the Tomek properly', () => {
  expect(testFunction("Tomek")).toBe("Tomek World");
});