const { Router } = require('express');
const createEmployeeController = require('../controllers/employee/createEmployeeController');
const deleteEmployeeController = require('../controllers/employee/deleteEmployeeController');
const getAllEmployeeController = require('../controllers/employee/getAllEmployeeController');
const getOneEmployeeController = require('../controllers/employee/getOneEmployeeController');
const updateEmployeeController = require('../controllers/employee/updateEmployeeController');

const router = Router();

router.post('/api/employees', createEmployeeController.createEmployee);
router.delete('/api/employees/:id', deleteEmployeeController.deleteEmployee);
router.get('/api/employees', getAllEmployeeController.getAllEmployee);
router.get('/api/employees/:id', getOneEmployeeController.getOneEmployee);
router.put('/api/employees/:id', updateEmployeeController.updateEmployee);

module.exports = router;