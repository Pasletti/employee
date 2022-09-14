const httpResponse = require("../../helpers/httpHelper");
const writeLog = require("../../helpers/writeLog.js");

const updateEmployeeRepository = require('../../repository/employee/updateEmployeeRepository');

class updateEmployeeController {

    /**
    * Update a employee.
    * 
    * @params id
    * @params JSON { age, name, role }
    * @returns http status, sucess, message, data
    * @returns data -> id, age, name, role, date_created, date_modified
    */
    static async updateEmployee(req, res) {
        try {
            writeLog.write("updateEmployeeController.updateEmployee");

            const employee = await updateEmployeeRepository.updateEmployee(req);

            writeLog.write("Employee changed successfully");

            return httpResponse.successWithData(res, "Employee changed successfully", employee);
        }
        catch (error) {
            writeLog.write("*** ERROR ***");
            writeLog.write(error.message);

            return httpResponse.error(res, error.message);
        }
    }

}

module.exports = updateEmployeeController;