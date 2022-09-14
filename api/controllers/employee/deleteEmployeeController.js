const httpResponse = require("../../helpers/httpHelper");
const writeLog = require("../../helpers/writeLog.js");

const deleteEmployeeRepository = require('../../repository/employee/deleteEmployeeRepository');

class deleteEmployeeController {

    /**
    * Delete a employee.
    * 
    * @params id
    * @returns http status, sucess, message, data
    */
    static async deleteEmployee(req, res) {
        try {
            writeLog.write("----------------------------------------------------------");
            writeLog.write("deleteEmployeeController.deleteOneEmployee");

            const employee = await deleteEmployeeRepository.deleteEmployee(req);

            writeLog.write("Employee deleted successfully");

            return httpResponse.successWithData(res, "Employee deleted successfully", employee);
        }
        catch (error) {
            writeLog.write("*** ERROR ***");
            writeLog.write(error.message);
            
            return httpResponse.error(res, error.message);
        }
    }

}

module.exports = deleteEmployeeController;