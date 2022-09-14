const database = require('../../models');

class getAllEmployeeRepository {

    // List a employee
    static async getAllEmployee(req) {
        const { id } = req.params;
    
        const employee = await database.tb_employees.findAll({
            attributes: [
                'id',
                'age', 
                'name', 
                'role'
            ],
            order: [
                ['id', 'ASC']
            ]
        });

        return employee;
    }

}

module.exports = getAllEmployeeRepository;