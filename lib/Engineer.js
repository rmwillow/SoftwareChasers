//require employee
//create engineer class that extends employee
//use super to call functions on parent class Employee
//pass get jobTitle test method to return engineer
//export engineer class

// TODO: Write code to define and export the Engineer class. 
class Engineer extends Employee {
  constructor(name, id, email, gitHubUser) {
    super(name, id, email);
    this.github = gitHubUser;
  }

  getRole() {
    return "Engineer";
  }

  getGithub() {
    return this.github;
  }
}

module.exports = Engineer;
