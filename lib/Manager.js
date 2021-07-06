//require employee
//create manager class that extends employee
//use super to call functions on parent class Employee
//pass tests for manager
//call getJobTitle()
//export manager class


const Employee = require("./employee.js");

class Manager extends Employee{
    constructor(name, email, id, officeNum){
        super(name, email, id);
        this.office = officeNum;
    }
    getJobTitle(){
        return "Manager" 
     }
}

module.exports = Manager; 