const database = require('../../models');

class getOneEmployeeRepository {

    // list a employee
    static async getOneEmployee(id) {
        const employee = await database.tb_employees.findOne({
            where: { 
                id: Number(id)
            },
            attributes: [
                'id', 
                'age', 
                'name', 
                'role'
            ]
        });

        return employee;
    }

}

module.exports = getOneEmployeeRepository;