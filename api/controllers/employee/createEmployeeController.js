const httpResponse = require("../../helpers/httpHelper");
const writeLog = require("../../helpers/writeLog.js");

const createEmployeeRepository = require('../../repository/employee/createEmployeeRepository');

class createEmployeeController {

    /**
    * Create a employee.
    * 
    * @params JSON { age, name, role }
    * @returns http status, sucess, message, data
    * @returns data -> id, age, name, role, date_created, date_modified
    */
    static async createEmployee(req, res) {
        try {
            writeLog.write("----------------------------------------------------------");
            writeLog.write("createEmployeeController.createEmployee");

            const employee = await createEmployeeRepository.createEmployee(req);

            writeLog.write("Employee created successfully");

            return httpResponse.successWithData(res, "Employee created successfully", employee);
        }
        catch (error) {
            writeLog.write("*** ERROR ***");
            writeLog.write(error.message);
            
            return httpResponse.error(res, error.message);
        }
    }

}

module.exports = createEmployeeController;