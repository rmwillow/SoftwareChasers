const Manager = require('../lib/Manager.js');
const Employee = require("../lib/Employee");

test("getJobTitle() should return \"Manager\"", () => {
    const testValue = "Manager";
    const newManager = new Manager("tempVal", 1, "test@gmail.com", testValue);
    expect(newManager.getJobTitle()).toBe(testValue);
  });
  