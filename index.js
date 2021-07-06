//create class Employee
//use constructor method and arguments of name, email and id 
//export class Employee

class Employee {

    constructor(name, email, id) {
        this.name = name;
        this.email = email;
        this.id = id;
    }
    
    getName(){ return this.name; };

    getId(){ return this.id; };

    getJobTitle(){ 
        return "Employee";
    };

    getEmail(){ return this.email; };

}

module.exports = Employee;