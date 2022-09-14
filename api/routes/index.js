const bodyParser = require('body-parser');
const employees = require('./employeesRoute');

module.exports = app => {
  app.use(bodyParser.json({limit:'5mb'}));
  app.use(employees);
}