const Employee = require('../lib/Employee.js');


test("Can create new object from employee class", () => {
  const employTest = new Employee();
  //using type of to get type of and tobe to set it the type we want (jest documentation)
  expect(typeof(employTest)).toBe("object");
});

test("Can set employee name to alice", () => {
  const name = "Alice";
  const employTest = new Employee(name);
  expect(employTest.name).toBe(name);
});

test("Can set employee ID to testValue", () => {
  const testValue = 100;
  const employTest = new Employee("tempVal", testValue);
  expect(employTest.id).toBe(testValue);
});

test("Can set email to be testValue", () => {
  const testValue = "test@test.com";
  const employTest = new Employee("tempVal", 1, testValue);
  expect(employTest.email).toBe(testValue);
});

test("Can get name from getName()", () => {
  const testValue = "Alice";
  const employTest = new Employee(testValue);
  expect(employTest.getName()).toBe(testValue);
});

test("Can get id from getId()", () => {
  const testValue = 100;
  const employTest = new Employee("tempVal", testValue);
  expect(employTest.getId()).toBe(testValue);
});

test("Can get email from getEmail()", () => {
  const testValue = "test@test.com";
  const employTest = new Employee("tempVal", 1, testValue);
  expect(employTest.getEmail()).toBe(testValue);
});

test("getJobTitle() should return \"Employee\"", () => {
  const testValue = "Employee";
  const employTest = new Employee("Alice", 1, "test@gmail.com");
  expect(employTest.getJobTitle()).toBe(testValue);
});
