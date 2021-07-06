//require employee
//create engineer class that extends employee
//use super to call functions on parent class Employee
//pass get jobTitle test method to return engineer
//export engineer class

const Employee = require('../lib/Employee.js');
 
class Engineer extends Employee {
    constructor(name, email, id, gitHubUsername){
        super(name, email, id);
        this.gitHub = gitHubUsername;
    }
    getRole(){
        return "Engineer"
    }
}

module.exports = Engineer;