const Intern = require('../lib/Intern.js');

test("Can set school object from constructor", () => {
    const testValue = "UT";
    const newIntern = new Intern("tempVal", 1, "test@gmail.com", testValue);
    expect(newIntern.school).toBe(testValue);
  });

  test("getRole() should return \"Intern\"", () => {
    const testValue = "Intern";
    const newIntern = new Intern("tempVal", 1, "test@gmail.com", "UT");
    expect(newIntern.getRole()).toBe(testValue);
  });
  

  test("Can get school from getSchoolName()", () => {
    const testValue = "UT";
    const newIntern = new Intern("tempVal", 1, "test@gmail.com", testValue);
    expect(newIntern.getSchoolName()).toBe(testValue);
  });