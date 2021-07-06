const Manager = require('../lib/Manager.js');

test("getRole() should return \"Manager\"", () => {
    const testValue = "Manager";
    const newManager = new Manager("tempVal", 1, "test@gmail.com", testValue);
    expect(newManager.getRole()).toBe(testValue);
  });
  