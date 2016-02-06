'use strict';

app.directive("myEmployee", function () {
  return {
    template: 'Name - {{employeeData.employees[0].name}}, Age - {{employeeData.employees[0].age}}'
  };
});
