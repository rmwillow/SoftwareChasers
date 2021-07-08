const Intern = require('../lib/Intern.js');

test("Can set school object from constructor", () => {
    const testValue = "UT";
    const tempIntern = new Intern("tempVal", 1, "test@gmail.com", testValue);
    expect(tempIntern.school).toBe(testValue);
  });

  test("getRole() should return \"Intern\"", () => {
    const testValue = "Intern";
    const tempIntern = new Intern("tempVal", 1, "test@gmail.com", "UT");
    expect(tempIntern.getRole()).toBe(testValue);
  });
  

  test("Can get school from getSchoolName()", () => {
    const testValue = "UT";
    const tempIntern = new Intern("tempVal", 1, "test@gmail.com", testValue);
    expect(tempIntern.getSchoolName()).toBe(testValue);
  });