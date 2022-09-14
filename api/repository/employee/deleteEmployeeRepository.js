const database = require('../../models');

class deleteEmployeeRepository {

    // Delete a employee
    static async deleteEmployee(req) {
        const { id } = req.params;

        return await database.tb_employees.destroy(
            { 
                where: { id: Number(id) }
            }
        );
    }

}

module.exports = deleteEmployeeRepository;