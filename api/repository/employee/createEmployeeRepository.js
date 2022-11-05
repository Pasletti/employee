const database = require('../../models');

class createEmployeeRepository {

    // Create a employee
    static async createEmployee(req) {
        let newEmployee = req.body;

        console.log(newEmployee);

        return await database.tb_employees.create(newEmployee);
    }

}

module.exports = createEmployeeRepository;