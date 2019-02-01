const testFunction = require('./code');

test('check if greets the world properly', () => {
  expect(testFunction()).toBe("Hello World");
});


test('check if greets the Tomek properly', () => {
  expect(testFunction("Tomek")).toBe("Hello Tomek");
});


test('check if greets the random bullshit properly', () => {
  const randomName = Math.random().toString(36).substring(7);
  expect(testFunction(randomName)).toBe(`Hello ${randomName}`);
});

