const database = require('../../models');

class createEmployeeRepository {

    // Create a employee
    static async createEmployee(req) {
        const newEmployee = req.body;

        return await database.tb_employees.create(newEmployee);
    }

}

module.exports = createEmployeeRepository;