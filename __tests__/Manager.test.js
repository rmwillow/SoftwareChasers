const Manager = require('../lib/Manager.js');

test("getRole() should return \"Manager\"", () => {
    const testValue = "Manager";
    const tempManager = new Manager("tempVal", 1, "test@gmail.com", testValue);
    expect(tempManager.getRole()).toBe(testValue);
  });
  