//create class Employee
//use constructor method and arguments of name, email and id 
//export class Employee

class Employee {

    constructor(name, email, id) {
        this.name = name;
        this.email = email;
        this.id = id;
    }
    //get name function
    getName(){ 
        return this.name; 
    };

    //get ID function
    getId(){ 
        return this.id; 
    };

    //get job title function
    getRole(){ 
        return "Employee";
    };

    //get email function
    getEmail(){ 
        return this.email; 
    };

}

module.exports = Employee;