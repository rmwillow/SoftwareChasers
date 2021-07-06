const Intern = require('../lib/Intern.js');

test("Can set school object from constructor", () => {
    const testValue = "UT";
    const newIntern = new Intern("tempVal", 1, "test@gmail.com", testValue);
    expect(newIntern.school).toBe(testValue);
  });