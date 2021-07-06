const Engineer = require('../lib/Engineer.js');

test("Can set up GitHub account from constructor", () => {
    const testValue = "gitHubUser";
    const newEngineer = new Engineer("tempVal", 1, "test@gmail.com", testValue);
    expect(newEngineer.gitHub).toBe(testValue);
});

test("getJobTitle() should return \"Engineer\"", () => {
    const testValue = "Engineer";
    const newEngineer = new Engineer("tempVal", 1, "test@test.com", "gitHubUser");
    expect(newEngineer.getJobTitle()).toBe(testValue);
  });

  test("Can get GitHub username from getGithub()", () => {
    const testValue = "gitHubUser";
    const newEngineer = new Engineer("tempVal", 1, "test@test.com", testValue);
    expect(newEngineer.getGitHub()).toBe(testValue);
  });
