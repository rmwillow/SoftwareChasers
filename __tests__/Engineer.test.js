const Engineer = require('../lib/Engineer.js');

test("Can set up GitHub account from constructor", () => {
    const testValue = "gitHubUser";
    const newEngineer = new Engineer("tempVal", 1, "test@gmail.com", testValue);
    expect(newEngineer.gitHub).toBe(testValue);
});