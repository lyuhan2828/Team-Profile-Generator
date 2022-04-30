const Employee = require('/Employee.js')
class Manager extends Employee {
constructor(officeNumber, name, id, email) {
    super(name, id, email);
    this.officeNumber = officeNumber;
}
getoffcierNumber (){
    return this.offcierNumber
}
getRole(){
    return Manager
}
}
module.exports = Manager