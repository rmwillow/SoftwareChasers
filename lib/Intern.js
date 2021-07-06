//require employee
//create intern class that extends employee
//use super to call functions on parent class Employee
//pass tests for intern
//call getJobTitle()
//export intern class
const Employee = require('../lib/Employee.js');

class Intern extends Employee{
    constructor(name, email, id, schoolName){
        super(name, email, id);
        this.school = schoolName;
    }

    getJobTitle(){
        return "Intern"
    }

}

module.exports = Intern;
