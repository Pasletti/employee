const database = require('../../models');

class updateEmployeeRepository {

    // Update a employee
    static async updateEmployee(req) {
        const { id } = req.params;
        const updateEmployee = req.body;

        await database.tb_employees.update(
            updateEmployee, 
            { 
                where: { id: Number(id) }
            }
        );

        return await database.tb_employees.findOne( 
            { 
                where: { id: Number(id) }
            }
        );
    }

}

module.exports = updateEmployeeRepository;