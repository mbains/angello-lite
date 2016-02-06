'use strict';

app.service('employeeSvc', ['$resource',
  function ($resource) {
    var baseApiPath = 'http://localhost\\:9002/api/';
    var employeeApiPath = baseApiPath + 'employees/:id';

    var Employee = $resource(employeeApiPath, {
      'update': {
        method: 'PUT'
      }
    });

    return {
      Employee: Employee
    };
  }
]);
