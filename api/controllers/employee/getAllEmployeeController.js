const httpResponse = require("../../helpers/httpHelper");
const writeLog = require("../../helpers/writeLog.js");

const getAllEmployeeRepository = require('../../repository/employee/getAllEmployeeRepository');

class getAllEmployeeController {

    /**
    * List all employees.
    * 
    * @params
    * @returns http status, sucess, message, data
    * @returns data -> id, age, name, role
    */
    static async getAllEmployee(req, res) {
        try {
            writeLog.write("----------------------------------------------------------");
            writeLog.write("getAllEmployeeController.getAllEmployee");

            const allEmployees = await getAllEmployeeRepository.getAllEmployee(req);

            writeLog.write("Employees successfully listed");

            return httpResponse.successWithData(res, "Employees successfully listed", allEmployees);
        }
        catch (error) {
            writeLog.write("*** ERROR ***");
            writeLog.write(error.message);
            
            return httpResponse.error(res, error.message);
        }
    }

}

module.exports = getAllEmployeeController;