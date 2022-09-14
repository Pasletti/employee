const httpResponse = require("../../helpers/httpHelper");
const writeLog = require("../../helpers/writeLog.js");

const getOneEmployeeRepository = require('../../repository/employee/getOneEmployeeRepository');

class getOneEmployeeController {

    /**
    * List a employee
    * 
    * @params id
    * @returns http status, sucess, message, data
    * @returns data -> id, age, name, role
    */
    static async getOneEmployee(req, res) {
        try {
            writeLog.write("----------------------------------------------------------");
            writeLog.write("getOneEmployeeController.getOneEmployee");

            let id = req.params.id;
            id = Number(id.replace(/\D/g,''));

            const oneEmployee = await getOneEmployeeRepository.getOneEmployee(id);

            if (oneEmployee) {
                writeLog.write("Employee successfully listed");

                return httpResponse.successWithData(res, "Employee successfully listed", oneEmployee);
            }

            writeLog.write("Employee not found");

            return httpResponse.success(res, "Employee not found");
        }
        catch (error) {
            writeLog.write("*** ERROR ***");
            writeLog.write(error.message);
            
            return httpResponse.error(res, error.message);
        }
    }

}

module.exports = getOneEmployeeController;