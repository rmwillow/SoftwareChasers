const Engineer = require('../lib/Engineer.js');

test("Can set up GitHub account from constructor", () => {
    const testValue = "gitHubUser";
    const tempEngineer = new Engineer("tempVal", 1, "test@gmail.com", testValue);
    expect(tempEngineer.gitHub).toBe(testValue);
});

test("getRole() should return \"Engineer\"", () => {
    const testValue = "Engineer";
    const tempEngineer = new Engineer("tempVal", 1, "test@gmail.com", "gitHubUser");
    expect(tempEngineer.getRole()).toBe(testValue);
  });

  test("Can get GitHub username from getGithub()", () => {
    const testValue = "gitHubUser";
    const tempEngineer = new Engineer("tempVal", 1, "test@gmail.com", testValue);
    expect(tempEngineer.getGitHub()).toBe(testValue);
  });
